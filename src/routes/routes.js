import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import DogShow from '../pages/DogShow'
import IndexPage from '../pages/Index'

export default (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path ='/login' component={Login}></Route>
    <Route exact path = '/signup' component={Signup}></Route>
    <Route exact path ='/dog' component={DogShow}></Route>
    <Route exact path ='/index' component={IndexPage}></Route>
  </Switch>
)