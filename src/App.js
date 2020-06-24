import React, { Component } from 'react'
import './App.css';
import ToDoInput from './ToDoInput'
import ToDolist from './ToDolist'


class App extends Component {
  state={
    list:['0','1','2','3','4'],
  }
  removeItem = (index) =>{
    console.log(index)
    this.setState(
      {
        trash:this.state.list.splice(index,1)
      }
    )
    console.log(this.state.trash)
    
}
  onElementAdd = (newElem) =>
  {
    console.log('Hello',newElem)
    const {list} = this.state;
    this.setState(
      {
        list:[...list, newElem]
      }
    );
  }
  render() {
    const {list} = this.state
    return (
      <div>
        <h1>To Do List</h1>
        <ToDoInput onChange={this.onElementAdd}/>
        <ToDolist list={list} onDelete={this.removeItem}/>
      </div>
    )
  }
}

export default App