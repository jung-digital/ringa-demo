import './Workspace.scss';

import React from 'react';

import '../components/List';

import classnames from 'classnames';

import {attach, depend, dependency} from 'react-ringa';

class Workspace extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {

    return (
      <div className="workspace">
      </div>
    );
  }
}

export default Workspace;
