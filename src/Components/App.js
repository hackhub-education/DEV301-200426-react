import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home'
import Nav from './Nav'
import Profile from './Profile'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
