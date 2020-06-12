import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import store from './store/store';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './styles/app.css';

const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Montserrat", Helvetica, Arial, sans-serif`,
    fontSize: 14,
  },
  palette: {
    primary: {
      main: '#1D5297',
      light: '#4480C5',
    },
    secondary: {
      main: '#FF6A17',
    },
    info: {
      main: '#4CAF50',
    },
  },
});

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
    <Router history={history}>
      <Switch>
        <Provider store={store}>
          <App></App>
        </Provider>
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
