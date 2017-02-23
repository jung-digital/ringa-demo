import 'normalize.css/normalize.css';
import './App.scss';

import React from 'react';

import {attach, depend, dependency} from 'react-ringa';
import {dispatch} from 'ringa';

import AppController from './AppController';
import ListModel from './ListModel';

class App extends React.Component {
  constructor() {
    super();

    attach(this, new AppController());
    depend(this, dependency(ListModel, 'list'));

    this.inputKeyUpHandler = this.inputKeyUpHandler.bind(this);
    this.itemClickHandler = this.itemClickHandler.bind(this);
  }

  addItem(value) {
    dispatch(AppController.ADD_ITEM, 
      {
        name: value
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
          <input ref="newItem" className="todo__input" onKeyUp={this.inputKeyUpHandler}  />

          <div className="list">
            {this.state.list.map(item => 
              <div className="item" key={item.id} onClick={this.itemClickHandler.bind(this, item.id)}>
                {item.name}
              </div>)}
          </div>
        </div>
      </div>
    );
  }

  inputKeyUpHandler(event) {
    if (event.key === 'Enter') {
      this.addItem(this.refs.newItem.value);
      this.refs.newItem.value = '';
    }
  }

  itemClickHandler(id, event) {
    event.stopPropagation();
    this.removeItem(id);
  }
}

export default App;
