import React from "react";
import "./app-header.css"

const TodoHeader = ({toDo, done})=> {
    return (
        <div className="app-header d-flex">
            <h1>ToDo List</h1>
            <h2>{toDo} more to,{done} done </h2>
        </div>
    )
  }
  export default TodoHeader;