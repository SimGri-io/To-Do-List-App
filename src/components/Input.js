import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props
        return (
            <div className="input-container">
               <form onSubmit={handleSubmit}>
                 <input
                     type="text"
                     className="input-item"
                     placeholder="add to do item"
                     value={item}
                     onChange={handleChange}
                     />
                     <div className="submit-btn">
                    <button id="submit-btn" type="submit" disabled={item?false:true}> {editItem? 'edit item':'add item'}</button>
                    </div>
               </form>
            </div>
        )
    }
}
