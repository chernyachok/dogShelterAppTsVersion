import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Navbar from '../domains/Navbar';
import MyImages from '../components/MyImages';

export default () => (
  <div className="container">
    <Navbar/>
    <Switch>
        <Route exact path="/" component={MyImages}/>
    </Switch>
  </div>
)
