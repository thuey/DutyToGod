import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import {
  Login,
  Register,
} from './auth';
import Main from './Main';

class App extends Component {

  state = {
    authed: false,
  };

  render() {
    return (
      <div>
        <PrivateRoute path='/' exact component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </div>
    );
  }
}

export default App;
