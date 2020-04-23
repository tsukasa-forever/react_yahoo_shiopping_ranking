import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './createStore';
import { ConnectedRouter } from 'react-router-redux';

const history = createBrowserHistory();
const store = createStore();

// Linkコンポーネントなどが動作するように
// react - router - domのRouterではなく
// react - router - reduxのConnectedRouterを使う

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);