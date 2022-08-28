import React from 'react'
import './AddButton.scss'

function AddButton(props) {
  return (
    <button onClic={props.onClicked}>Add</button>
  )
}


export default AddButton
