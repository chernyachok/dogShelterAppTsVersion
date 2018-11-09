import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

export default function createMiddleware() {
  const middlewares = [
    thunk,
    promiseMiddleware(),
  ];

  return middlewares;
}
