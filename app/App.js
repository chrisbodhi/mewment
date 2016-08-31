import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { createStore, applyMiddleware } from 'redux';

import routes from './config/routes';
import app from './reducers';
import { loadState, saveState } from './modules/localStorage';

require('../public/styles/index.less');

const loggerMiddleware = createLogger();

const persistedState = loadState();
const store = createStore(
  app,
  persistedState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store.subscribe(() => {
  saveState({
    cats: store.getState().cats,
    likes: store.getState().likes,
    photos: store.getState().photos,
    status: store.getState().status,
    user: store.getState().user
  });
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
