import React from 'react';
import "./todo-item.css"

class TodoItems extends React.Component {


  render(){

    const {name, onDeleted, onToggleImportantsf, onToggleDonesf, done, important} = this.props;

    let classNames = "todo-item";
    if (done) {
      classNames += ' done'; // space before done
    }
    if (important) {
      classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span
          className="todo-item-name"
          onClick={onToggleDonesf}>
          {name}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportantsf}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );

  }
}
export default TodoItems;