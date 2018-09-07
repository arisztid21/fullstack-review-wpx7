import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Memes from './components/memes';

export default <Switch>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='/' exact component={Home}/>
    <Route path='/memes' component={Memes}/>
</Switch>