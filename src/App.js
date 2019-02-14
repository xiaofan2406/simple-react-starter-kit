import React from 'react';
import { Router } from '@reach/router';
import { Layout, Home, Navigation, NotFound } from 'components';
import 'styles/reset.css';
import 'styles/animation.css';

const About = React.lazy(() =>
  import(/* webpackChunkName: "About" */ './components/About')
);

const Contact = React.lazy(() =>
  import(/* webpackChunkName: "Contact" */ './components/Contact')
);

const App = () => (
  <React.Suspense fallback="loading...">
    <Layout>
      <Router>
        <NotFound default />
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
      <Navigation />
    </Layout>
  </React.Suspense>
);

export default App;
