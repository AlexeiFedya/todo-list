import React from "react";
import "./item-add-form.css"

class ItemAddForm extends React.Component {

    state = {
        name: ""
    }

    onNameChenge = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault(); // когда этот евент будет обраб, то действие по умол не нужно ( перезагрузка )
        this.props.onItemAdd(this.state.name)
        this.setState({
            name:""
        })
    }

    render(){
        return(
            <form
                className="item-add-form d-flex"
                onSubmit={this.onSubmit}>
                
                <input 
                    type="text"
                    placeholder =" add new todo item"
                    className="form-control"
                    onChange={this.onNameChenge}
                    value={this.state.name}></input>
                <button
                className = 'btn btn-outline-secondary'
                >
                    Add Item
                </button>
            </form>
        )
    }
}

export default ItemAddForm