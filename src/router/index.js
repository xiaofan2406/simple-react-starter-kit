import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'components';
import { asyncLoad } from 'hocs';

export const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: asyncLoad({
      importer: () => import(/* webpackChunkName: "Home" */ './Home')
    })
  },
  {
    path: '/about',
    name: 'About',
    component: asyncLoad({
      importer: () => import(/* webpackChunkName: "About" */ './About')
    })
  },
  {
    path: '/contact',
    name: 'Contact',
    component: asyncLoad({
      importer: () => import(/* webpackChunkName: "Contact" */ './Contact')
    })
  }
];

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map(route =>
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          )}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
