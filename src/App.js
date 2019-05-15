import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList'

let todoArray = [
  {
    todo: 'Learn react',
    id: Date.now(),
    completed: false
  }
]
const defaultState = {
  todos: todoArray,
  todo: '',
  id: '',
  completed: false
}
class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super()
    this.state = defaultState
  }

  changeHandler = event => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value})
  }
  addTodoHandler = event => {
    event.preventDefault()
    let newTodo = {
      todo: this.state.todo,
      id: Date.now(),
      completed: this.state.completed
    }
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: '',
      id: '',
      completed: false
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          addTodoHandler={this.addTodoHandler}
          todoText={this.state.todo}
          onInputChange={this.changeHandler}
          onSubmit={this.addTodoHandler}
          onClick={this.addTodoHandler}
        />
      </div>
    );
  }
}

export default App;
