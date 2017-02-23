import './List.scss';

import React from 'react';

import Item from '../components/Item';

import classnames from 'classnames';

import {attach, depend, dependency} from 'react-ringa';

class List extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  mockData() {
    return [
      {name: 'Walk the dog', done: false},
      {name: 'Read Godel Echer Bach', done: true},
      {name: 'Exercise', done: true},
      {name: 'Become 1337 haxxor', done: false},
    ];
  }

  render() {

    return (
      <div className="list">
        {this.mockData().map(item => <Item key={item.name} item={item}/>)}
      </div>
    );
  }
}

export default List;
