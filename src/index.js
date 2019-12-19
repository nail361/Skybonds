import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appState from './reducers/appState';
import './index.css';
import App from './App';

let options = null;

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  options = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
} else {
  options = applyMiddleware(thunk);
}

const store = createStore(
  appState,
  options,
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
