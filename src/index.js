import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import createStore from './createStore';
const store = createStore();


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
  </Provider>,
  document.getElementById('root')
);