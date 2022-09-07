import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

import AddButton from './AddButton/AddButton'
import InputTodo from './InputTodo/InputTodo'
import Todos from './Todos/Todos'

import './TodoList.scss'



function TodoList(props) {
    const [currentValue, setCurrentValue] = useState('')
    const [tasks, setTasks] = useState([])

    const addingTodo = () => {
        const value = {
            title: currentValue,
            id: uuid()
        }
        const values = [...tasks, value] 
        setCurrentValue('')
        if (value.title) {
            setTasks(values)
        } else{
            alert("You can't add empty string")
        }
    }
    const DeletingTodo = (id) => {
        const deletedTask = tasks.filter(el => el.id !== id)
        setTasks(deletedTask)
    }

    return (
        <div>
            <div className='todo-wrapper'>
            <div>
                <InputTodo
                    id = 'input-todo' 
                    onChange={(e) => {
                        const value = e.target.value
                        setCurrentValue(value)
                    }}
                    value={currentValue}
                />
                <AddButton onClicked={addingTodo}/>
            </div>
            </div>
            <Todos array={tasks} onClick={DeletingTodo}/>
        </div>

    )
}

export default TodoList
