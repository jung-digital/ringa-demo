import './List.scss';

import React from 'react';

import classnames from 'classnames';

import {attach, depend, dependency} from 'react-ringa';

class List extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {

    return (
      <div className="list">
      </div>
    );
  }
}

export default List;
