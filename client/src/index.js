// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';

const initialState = {};
const store = configureStore(initialState);

const rootEl = document.getElementById('root');

if (rootEl) {
  ReactDOM.render(<App store={store} />, rootEl);
  registerServiceWorker();
}

if (module.hot) {
  // $FlowFixMe
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line
    if (rootEl) {
      ReactDOM.render(<NextApp store={store} />, rootEl);
    }
  });
}
