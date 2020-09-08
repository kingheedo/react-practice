import React, { Component,Fragment } from 'react'

class TodoInfo extends Component {
  state ={
    editing: false,
    todo:''
  }
  handleRemove = ()=>{
    const {info,onRemove} = this.props
    onRemove(info.id)

  }
  handleToggle = () =>{
    const {info,onUpdate} = this.props;
    if(this.state.editing){
      onUpdate(info.id,{
        todo: this.state.todo})
    }else{
      this.setState({
        todo: info.todo 
      })
    }
    this.setState({
      editing: !this.state.editing,
    })
  }
  handleChange = (e) =>{
   this.setState({
    [e.target.name]: e.target.value
   })
  }

  render() {
    const {editing} = this.state
    const { todo } = this.props.info
    const style = {
      border: '1px solid black',
      width: '300px',
      padding: '50px',
      margin: '8px',
    }
    const style2= {
      margin: '3px',
    }
    
    return (
      <div style={style}>
        {
          editing?(
            <Fragment>
              <input 
              name ="todo" 
              onChange={this.handleChange}
              value={this.state.todo}></input>
            </Fragment>
          ) : (
            <Fragment>
              <div>
                <b>{todo}</b>
              </div>
            </Fragment>
          )
        }
        
        <div>
        <button style ={style2} onClick = {this.handleRemove}>삭제</button>
        <button style ={style2} onClick = {this.handleToggle}>
          {editing? '적용' : '수정'}
        </button>
        </div>
      </div>
    )
  }
}

export default TodoInfo
