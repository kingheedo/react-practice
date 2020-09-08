import React, { Component } from 'react'

class TodoInfo extends Component {
  render() {
    const { todo, id } = this.props.info
    const style = {
      border: '1px solid black',
      width: '300px',
      padding: '50px',
      margin: '8px',
    }
    return (
      <div style={style}>
        <div>
          <b>{todo}</b>
        </div>
      </div>
    )
  }
}

export default TodoInfo
