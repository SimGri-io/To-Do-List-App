import React, { Component } from 'react'
import TodoItem from './ToDoItem'

export default class List extends Component {
    render() {
        const { items, handleDelete, handleEdit, clearItems} = this.props
        return (
            <ul className="list-container">
                {items.map(item=> {
                return(
                <TodoItem 
                key={item.id} 
                title={item.title} 
                handleDelete={() => 
                handleDelete(item.id)} 
                handleEdit={()=>handleEdit(item.id)}
                ></TodoItem>
                )})}
                <button 
                id="clear-btn" 
                type="button" 
                onClick={clearItems}
                >
                Clear items
                </button>
            </ul>
        )
    }
}
