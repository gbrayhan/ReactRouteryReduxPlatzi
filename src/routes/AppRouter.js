import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../containers/Login';
import App from '../containers/Home';

const AppRouter = () => (
  <BrowserRouter>
    <Route exact path='/' component={App} />
    <Route exact path='/login' component={Login} />
  </BrowserRouter>
);

export default AppRouter;
