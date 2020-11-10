import React from "react";
import "./todo-list.css"
import TodoItems from '../todo-item/todo-item'

const TodoList = ({todos, onDeleteds, onToggleImportants, onToggleDones})=> {

    const elements= todos.map((item)=>{

        const { id, ...itemProps} = item // all propeties but no id, in itemProps  

        return (
            <li key={id} className="list-group-item">
                <TodoItems 
                {...itemProps}
                onDeleted={()=> onDeleteds(id)}
                onToggleImportantsf={()=>onToggleImportants(id)}
                onToggleDonesf={()=>onToggleDones(id)}/>
            </li>
    )
    } )

    return (
            <ul className="list-group todo-list">
                {elements}
            </ul>
    )
  }

  export default TodoList;