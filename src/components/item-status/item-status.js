import React from "react";

class ItemStatus extends React.Component {

        buttons = [
                {filter:"all" , name: "All"},
                {filter:"active" , name: "Active"},
                {filter:"done" , name: "Done"}
        ];


        render(){
                const {filters,onFilterChange} = this.props;

                const buttons=this.buttons.map(({filter, name}) => {
                        const isActive = filters === filter;
                        const clazz = isActive ? "btn-info" : "btn-outline-secondary";
                        return (
                                <button
                                        type="button"
                                        className={`btn ${clazz}`}
                                        key={filter}
                                        onClick={()=>onFilterChange(filter)}>
                                {name}
                                </button>
                        )
                })

                return (
                        <div className="btn-group">
                               {buttons}
                        </div> 
                )
        }
}

export default ItemStatus;