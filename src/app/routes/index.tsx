import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const getRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MyImages} />
        <Route path="/allbreeds" component={AllBreeds} />
        <Route path="/:breed_id" component={SingleBreed} />
      </Switch>
    </BrowserRouter>
  )
}
