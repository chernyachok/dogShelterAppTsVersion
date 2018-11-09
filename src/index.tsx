import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './app/store';
import {getRoutes} from './app/routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {getRoutes()}
  </Provider>,
  document.getElementById('root') as HTMLElement
);
