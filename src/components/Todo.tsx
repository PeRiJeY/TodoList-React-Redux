import * as React from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li 
    onClick={onClick}
    className={completed ? 'list-group-item disabled' : 'list-group-item'}
  >
    {text}
  </li>
)

export default Todo
