import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import Home from '../containers/Home';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>

  </BrowserRouter>
);

export default AppRouter;