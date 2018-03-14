import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Layout, Home } from 'components';
import { asyncLoad } from 'factories';
import { ROUTES } from 'utils/constants';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route
          path={ROUTES.HOME.path}
          exact={ROUTES.HOME.exact}
          component={Home}
        />
        <Route
          path={ROUTES.ABOUT.path}
          exact={ROUTES.ABOUT.exact}
          component={asyncLoad({
            importer: () =>
              import(/* webpackChunkName: "About" */ './components/About'),
          })}
        />
        <Route
          path={ROUTES.CONTACT.path}
          exact={ROUTES.CONTACT.exact}
          component={asyncLoad({
            importer: () =>
              import(/* webpackChunkName: "Contact" */ './components/Contact'),
          })}
        />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default hot(module)(App);
