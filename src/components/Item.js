import './Item.scss';

import React from 'react';

import classnames from 'classnames';

import {attach, depend, dependency} from 'react-ringa';

class Item extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {

    return (
      <div className="item">
      </div>
    );
  }
}

export default Item;
