import React from 'react'
import './Todo.css'

function Todo(props) {
  return (
    <div
      className={`todo-list ${props.item.purchased ? "completed" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p className="todo-item">{props.item.todo}</p>
    </div>
  )
}

export default Todo