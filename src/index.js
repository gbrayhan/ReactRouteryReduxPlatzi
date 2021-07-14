import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppRouter from './routes/AppRouter';

const initialState = {};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider>
    <AppRouter />

  </Provider>
  , document.getElementById('app'),
);
