import React from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App';
import * as reducers from './reducers';

const store = createStore(
  // 1つのReducerで完結することはほぼないので
  // 最初からcombineReducersを使う実装をしておく
  combineReducers(reducers),

  // Redux <iddlewareにredux-loggerを設定
  applyMiddleware(logger)
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
);