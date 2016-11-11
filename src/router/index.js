/**
 * Root route config
 * @see https://react-router.now.sh/route-config
 */

import React from 'react';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import Redirect from 'react-router/Redirect';

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


const HomeRedirect = () => <Redirect to="/" />;

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
        <Miss component={HomeRedirect} />
      </Layout>
    </Router>
  );
}


export default AppRouter;
