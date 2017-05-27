import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'components';

import Home from './Home';
import About from './About';
import Contact from './Contact';

export const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
