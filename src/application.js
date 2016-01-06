'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import reducers from './reducers';

import App from './components/App';
import Hello from './components/hello';
import Hello2 from './components/hello2';


const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))
const store = createStore(reducer)
const history = createHistory()


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" components={{content: Hello}}/>
        <Route path="bar" components={{content: Hello2}}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);