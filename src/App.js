import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import { Router } from 'react-router-dom';
import Routes from './routes/routes';
import GlobalStyle from './styles/global';

import history from './services/history';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
