import 'normalize.css/normalize.css';
import './App.scss';

import React from 'react';

import Todo from './layout/Todo';

import classnames from 'classnames';

import {attach, depend, dependency} from 'react-ringa';
import AppController from './AppController';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};

    attach(this, new AppController());
  }

  render() {
    let classes = classnames({
      app: true
    });

    return (
      <div ref="ringaComponent" className={classes}>
        <Todo />
      </div>
    );
  }
}

export default App;
