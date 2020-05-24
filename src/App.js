import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// load Redux Rematch
import { init } from '@rematch/core'
import { Provider } from 'react-redux'
import * as models from './store/models'

// load components
import Nav from './component/Nav';
import Page from './component/Page';

// load assets
import logo from './img/logo.png';
import avatar from './img/sample-avatar.png';

const store = init({
  models
})

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Nav logo={logo} avatar={avatar} />
            <Page avatar={avatar} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
