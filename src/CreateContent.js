import React, { Component } from "react";

class CreateContent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  state = {
    todo: ""
  };
  ChangeContent = (e) => {
    e.preventDefault();
    
  };

  render() {
    return (
      <form action="/create_content" method=" post">
        <input
          name="content"
          placeholder="오늘의 할일은?"
          onChange={this.ChangeContent}
          value={this.state.todo}
        ></input>
        <div>
          <button type="submit">작성</button>
        </div>
      </form>
    );
  }
}

export default CreateContent;
