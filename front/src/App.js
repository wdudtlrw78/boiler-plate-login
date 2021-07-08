import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LandigPage from './components/views/LandingPage/LandigPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandigPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;