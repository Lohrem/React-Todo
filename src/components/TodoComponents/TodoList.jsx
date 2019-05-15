// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList(props) {
  return (
    <div>
      <Todo />
      <TodoForm onFormSubmit={props.addTodoHandler} onInputChange={props.onInputChange} todoText={props.todoText}/>
    </div>
  )
}

export default TodoList