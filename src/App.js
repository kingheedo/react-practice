import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Header from './Header'
import TodoList from './TodoList'

class App extends Component {
  id = 0
  state = {
    todoData: [],
  }

  handleCreate = (data) => {
    const { todoData } = this.state
    this.setState({
      todoData: todoData.concat(Object.assign({}, data, { id: this.id++ })), //...data, {id: this.id++}
    })
  }
  render() {
    return (
      <div>
        <Header />
        <TodoForm onCreate={this.handleCreate} />
        <TodoList data={this.state.todoData} />
      </div>
    )
  }
}

export default App
