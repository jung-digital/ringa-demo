import 'normalize.css/normalize.css';
import './App.scss';

import React from 'react';

import classnames from 'classnames';

import {attach, depend, dependency} from 'react-ringa';
import {dispatch} from 'ringa';

import AppController from './AppController';
import TodoModel from './TodoModel';

class App extends React.Component {
  constructor() {
    super();

    attach(this, new AppController());
    depend(this, dependency(TodoModel, 'list'));

    this.inputKeyUpHandler = this.inputKeyUpHandler.bind(this);
    this.itemClickHandler = this.itemClickHandler.bind(this);
  }

  addItem() {
    dispatch(AppController.ADD_ITEM, 
      {
        name: this.refs.newItem.value
      }, this.refs.ringaComponent);
  }

  removeItem(id) {
    dispatch(AppController.REMOVE_ITEM, 
      {
        itemId: id
      }, this.refs.ringaComponent);
  }

  render() {
    return (
      <div ref="ringaComponent" className="app">
        <div className="todo">
          <div className="todo__title">todo</div>
          <input ref="newItem" className="todo__input" defaultValue={this.state.inputValue} onKeyUp={this.inputKeyUpHandler}  />

          <div className="list">
            {this.state.list.map(item => 
              <div className="item" key={item.id} onClick={this.itemClickHandler.bind(this, item.id)} >
                <div>{item.name}</div>
              </div>)}
          </div>
        </div>
      </div>
    );
  }

  inputKeyUpHandler(event) {
    if (event.key === 'Enter') {
      this.addItem();
    }
  }

  itemClickHandler(id, event) {
    event.stopPropagation();
    this.removeItem(id);
  }
}

export default App;
