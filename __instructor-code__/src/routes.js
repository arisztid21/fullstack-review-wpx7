import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Memes from './components/Memes';

export default <Switch>
  <Route path="/dashboard" component={Dashboard} />
  <Route exact path="/" component={Home} />
  <Route path="/memes" component={Memes} />
</Switch>