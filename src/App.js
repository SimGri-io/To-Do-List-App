import './css/App.css';
import React, { Component } from 'react'
import Input from './components/Input'
import List from './components/List'
import {v4 as uuidv4} from 'uuid'

export default class App extends Component {
  state={
    items:[],
    id:uuidv4(),
    item:'',
    editItem:false
  }

  handleChange = (e) =>{
    this.setState ({
      item: e.target.value
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items,newItem]
    this.setState({
      items:updatedItems,
      item:'',
      id: uuidv4(),
      editItem: false
    })
  }

  clearItems = () => {
    this.setState({items: []});
  }

  handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({items: filteredItems});
  }

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    const selectedItems = this.state.items.find(item => item.id === id)
    this.setState({
      items: filteredItems,
      item: selectedItems.title,
      id: id,
      editItem: true
    });
  }


  render() {
      return (
        <div className="app-container">
          <h1 className="titles">To Do Item</h1>
          <Input 
          item={this.state.item} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          editItem={this.state.editItem} 
          />
          <h1 className="titles">To Do List</h1>

          <List 
          items={this.state.items} 
          handleDelete={this.handleDelete} 
          handleEdit={this.handleEdit} 
          clearItems={this.clearItems} 
          />        
      </div>
    )
  }
}

