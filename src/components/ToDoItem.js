import React, { Component } from 'react'


export default class ToDoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props
        return (
            <div className="item-container">
                <h3 className="title-text">{title}</h3>
                <div className="item-icons">
                    <span 
                    className="icon-m" 
                    onClick={handleEdit}
                    ><i class="fas fa-pen"></i></span><br/>
                    <span 
                    className="icon-m" 
                    onClick={handleDelete}
                    ><i class="fas fa-trash"></i></span>
                </div>
            </div>
        )
    }
}
