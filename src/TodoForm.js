import React, { Component } from "react";

class todoForm extends Component {

  state = {
    todo: ""
  };
  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(
      this.state
    )
    this.setState({
      todo: ""
    })
  }
  render() {
    return (
      <form action="/create_content"
        method=" post"
        onSubmit={this.handleSubmit}>
        <input
          name="content"
          placeholder="오늘의 할일은?"
          onChange={this.handleChange}
          value={this.state.todo}
        ></input>
        <button type="submit" >등록</button>
      </form>
    );
  }
}

export default todoForm;
