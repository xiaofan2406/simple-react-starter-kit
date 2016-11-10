/**
 * Root route config
 * @see https://react-router.now.sh/route-config
 */

import React from 'react';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';

import Layout from 'components/Layout';
import Home from './Home';
import About from './About';


export const routes = [
  {
    pattern: '/',
    name: 'Home',
    exactly: true,
    component: Home
  },
  {
    pattern: '/about',
    name: 'About',
    component: About
  }
];


function AppRouter() {
  return (
    <Router>
      <Layout>
        {routes.map(route => (
          <Match
            key={route.pattern}
            pattern={route.pattern}
            exactly={route.exactly}
            component={route.component}
          />
        ))}
      </Layout>
    </Router>
  );
}


export default AppRouter;
