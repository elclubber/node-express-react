import React from 'react';
import Admin from '../Admin';
import Home from '../Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default props => (
  <div className="mainNav">
      <BrowserRouter>
        <Switch>
          <Route
          exact path="/"
            component={Home}
          />
          <Route
          exact path="/admin"
            component={Admin}
          />
        </Switch>
      </BrowserRouter>
      <div>
      </div>
  </div>
);
