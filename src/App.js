
import React from 'react';

import classnames from 'classnames';

import {attach, depend, dependency} from 'react-ringa';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let classes = classnames({
      app: true
    });

    return (
      <div ref="ringaComponent" className={classes}>
      </div>
    );
  }
}

export default App;
