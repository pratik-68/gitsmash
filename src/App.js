import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// IMPORTING CONTAINERS FROM CONTAINER FOLDER
import Home from './containers/Home';
import Login from './components/Login';
import Profile from './containers/Profile';

// IMPORTING COMPONENTS FROM COMPONENTS FOLDER
import Logout from './components/Logout';
import Error from './components/Error';
import Suggestion from './components/Suggestion';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navBar clearfix">
          <Link to="/">
            <h1>GIT SMASH</h1>
          </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/user" component={Profile} />
          <Route exact path="/user/suggestions" component={Suggestion} />
          <Route exact path="/user/:username" component={Profile} />
          <Route exact path="/error" component={Error} />
          <Route exact path="/:username" component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
