import React from 'react'
import AddButton from './AddButton/AddButton'
import InputTodo from './InputTodo/InputTodo'
import './TodoList.scss'

function TodoList(props) {
  return (
    <div className='todo-wrapper'>
        <div>
            <InputTodo />
            <AddButton />
        </div>
    </div>
  )
}

export default TodoList
