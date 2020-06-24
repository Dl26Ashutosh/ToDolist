import React, { Component } from 'react'

class ToDoInput extends Component {
    state={
        value:''
    }
    handleInput = (event) =>
    {
        this.setState(
            {
                value:event.target.value
            }
        )
    }
    handleClick = (event) =>
    {
        const {value} = this.state;
        const {onChange} = this.props;
        if(value !=='')
        {
            onChange(value)
            this.setState(
                {
                    value:''
                }
            )
        }
     }
    render() {
        const {value} = this.state;
        return (
            <>
             <input onChange={this.handleInput} value={value}/>
            <button onClick={this.handleClick}>+ADD</button>
            </>

        )
    }
}

export default ToDoInput
