import './Todo.scss';

import React from 'react';

import List from '../components/List';

import classnames from 'classnames';

import {attach, depend, dependency} from 'react-ringa';

class Todo extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {

    return (
      <div className="todo">
        <div className="todo__title">todo</div>
        <input ref="newItem" className="todo__input"/>
        <List />
      </div>
    );
  }
}

export default Todo;
