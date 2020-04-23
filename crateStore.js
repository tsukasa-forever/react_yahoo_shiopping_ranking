import {
  // 名前がかぶるので、エイリアスを使う
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import logger from 'redux-loger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from './reducers';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      ...reducers,
      // react-router-reduxのReducer
      router: routerReducer
    }),
    applyMiddleware(
      logger,
      // react-router-reduxのReduxMiddleware
      routerMiddleware(history)
    )
  )
}