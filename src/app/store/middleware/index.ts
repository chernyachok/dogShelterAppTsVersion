import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

export default function createMiddleware(){
  const middleware = [
      thunk,
      promiseMiddleware()
  ]
  return middleware;
}
