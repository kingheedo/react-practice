import React, { Component } from 'react';
import Header from './Header'
import CreateContent from './CreateContent'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [
        {
          id: 1, content: ''
        }
      ]
    }
    // newContent = ()=>{

    // }
  }
  render() {
    return (
      <div>
        <Header />
        <CreateContent />
      </div>
    );
  }
}

export default App;