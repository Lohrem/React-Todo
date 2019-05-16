import React from 'react'
import './Todo.css'

function TodoForm(props) {
  return (
    <form className="test" name="addTodo" onSubmit={props.onFormSubmit}>
      <input type="text" value={props.todo} onChange={props.onInputChange} name="todo" placeholder="Add a to-do..." className="todo-input"/>
      <br></br>
      <button className="submit-btn" onClick={props.addTodoHandler}>Submit</button>
      <button className="clearComplete-btn" onClick={props.clearCompletedHandler}>Clear Completed</button>
    </form>
  )
}

export default TodoForm