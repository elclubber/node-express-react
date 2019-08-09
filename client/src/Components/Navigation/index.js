import React from 'react';
import Social from '../Social';
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
          exact path="/social"
            component={Social}
          />
        </Switch>
      </BrowserRouter>
      <div>
      </div>
  </div>
);
