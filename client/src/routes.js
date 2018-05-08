// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Avatar } from './pages';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/avatar" component={Avatar} />
  </Switch>
);

export default routes;
