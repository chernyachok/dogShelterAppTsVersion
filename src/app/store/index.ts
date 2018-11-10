import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import createMiddleware from './middleware';

const middleware = createMiddleware();

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
