import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import configStore from './store/configStore.js';
import App from './components/App.jsx';
import MuiTheme from './components/MuiTheme.jsx';

ReactDOM.render(
  <MuiTheme>
    <Provider store={configStore()}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </Provider>
  </MuiTheme>,
  document.querySelector('#root-container')
);
