import React from 'react'
function ToDolist(props) {
    const {list} = props;
    return (
        <ul>
            {list.map((item,index)=><li key={index}>{item}<button onClick={() => {props.onDelete(index)}}>Delete</button></li>)}
            
        </ul>
    )
}

export default ToDolist