import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import store from './store/store';
import App from './App';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Provider store={store}>
        <App></App>
      </Provider>
    </Switch>
  </Router>,
  document.getElementById('root')
);
