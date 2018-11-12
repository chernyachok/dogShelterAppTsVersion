import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './app/store';
import Router from './app/routes';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </Provider>,
   document.getElementById('root')
 );
