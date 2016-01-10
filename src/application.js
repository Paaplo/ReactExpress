'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route , IndexRoute} from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
import reducers from './reducers';

import App from './components/index.js';
import Home from './components/Home/Home';
import Bar from './components/Bar/Bar';
import Foo from './components/Foo/Foo';

const store = createStore(reducers);
const history = createHistory();

syncReduxAndRouter(history, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);