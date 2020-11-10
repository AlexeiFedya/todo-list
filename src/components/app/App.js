import React from 'react';
import TodoHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'
import ItemStatus from "../item-status/item-status"
import "./app.css"
import ItemAddForm from "../item-add-form/item-add-fotm"

class App extends React.Component {

  maxId=100;

  state={
      todoData: [
        this.createItem('drink coffe'),
        this.createItem("Drink milk"),
        this.createItem("Drink alcohol")
      ],
      term: '', // search panel state
      filter: "done" // active, all, done
  }

  createItem(name) {
    return {
      name,
      important: false,
      done:false,
      id: this.maxId++

    }
  }

  deleteItem = (id) => {
    this.setState(({todoData})=> {

      const idx = todoData.findIndex((el)=> el.id === id)

      //[a,,b,c,d,e]
      //[a,b, d,e]

      const newArray = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      };

    })
  }

  onAddItem = (text) => { // add new item method
    const newItem = this.createItem(text)

    // add element in array
    this.setState(({todoData})=> {
      const newArr = [ // данный массив состоит 
        ...todoData, // из всех старых 
        newItem // и нового айтема 
      ];
      
      return {
        todoData: newArr // return new Arr 
      };
    });
  };

  toggleProperty (arr, id, propName) {
    const idx = arr.findIndex((el)=> el.id === id)

      //1. update object
      const oldItem=arr[idx];
      const newItem = {...oldItem, 
                      [propName]: !oldItem.propName }
      
      //2. construct new array
      return [
        ...arr.slice(0, idx), 
        newItem,
        ...arr.slice(idx + 1)];
  }

  onToggleDone = (id) => {
    this.setState(({todoData})=>{
        return {
          todoData: this.toggleProperty(todoData, id, 'done')
        }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData})=>{
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
  })
  }
  
  search(items, term) {
    if(term.length ===0){
      return items;
    }

    return items.filter ((item) => {
      return item.name
        .toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  onSearch = (term)=> {
    this.setState({term})
  }

  filter (items, filter) {
    switch (filter) {
      case 'all' :
        return items;
      case "active":
        return items.filter((item)=> !item.done);
      case "done": 
        return items.filter((item)=> item.done);
      
      default:   
        return items;
    }
  }

  onFilterChange = (filter)=> {
    this.setState({filter})
  }


  render (){
    
    const {todoData, term, filter} =this.state

    // done items 
    const doneCount = todoData
                      .filter((el)=>el.done).length;

    const todoCount = todoData.length - doneCount;

    const visibleItems=this.filter(
          this.search(todoData, term), filter)

  return (
    <div  className="todo-app">
      <TodoHeader toDo={todoCount} done={doneCount}/>
    <div className="top-panel d-flex">
      <SearchPanel
        onSearchChange={this.onSearch}/>
      <ItemStatus
        filters={filter}
        onFilterChange={this.onFilterChange}/>
    </div>
    <TodoList
      todos={visibleItems}
      onDeleteds={this.deleteItem}
      onToggleImportants={this.onToggleImportant}
      onToggleDones={this.onToggleDone}/>

      <ItemAddForm onItemAdd={this.onAddItem}/>
  </div>
  )
  }
}


export default App;
