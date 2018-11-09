import { createStore, applyMiddleware, compose } from 'redux';

import createMiddleware from './middleware';
import rootReducer from './rootReducer';

const middleware = createMiddleware();

export default function configureStore(){
  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  )
  return store;
}
