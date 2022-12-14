import React from 'react'


import './Todo.scss'

function Todos(props) {
    return (
        <div className='todo-container'>
            {props.array.map((el) => {
                return (
                    <div className='task' key={el.id}>
                        <p className = 'task-text'>{el.title}</p>
                        <span className = 'task-text'>{el.id}</span>
                        <button className = 'delete-button' onClick={() => props.onClick(el.id)}>X</button>
                    </div>
                )
            })}

        </div>
    )
}

export default Todos
