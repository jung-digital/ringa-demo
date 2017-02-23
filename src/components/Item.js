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
    let classes = classnames({
      item: true,
      'item--done': this.props.item.done
    });

    return (
      <div className={classes}>
        <div>{this.props.item.name}</div>
        <i className="fa fa-times-circle item__close" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Item;
