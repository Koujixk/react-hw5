import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

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
            id: uuidv4()
        }
        const values = [...tasks, value] 
        setCurrentValue('')
        if (value) {
            setTasks(values)
        } else{
            alert("You can't add empty string")
        }
    }
    const DeletingTodo = () => {
        console.log('work')
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
