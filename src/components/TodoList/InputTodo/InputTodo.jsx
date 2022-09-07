import React from 'react'
import './InputTodo.scss'

function InputTodo(props) {
  return (
        <input placeholder='type here' id={props.id} onChange={props.onChange} value={props.value}></input>
  )
}

export default InputTodo
