import React from 'react';
import Header from './Header';
import GiftControl from './GiftControl';
import Signin from './Signin';
import './../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <GiftControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;