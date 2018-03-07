import React from 'react';
import { hot } from 'react-hot-loader';
import 'styles/reset.css';
import 'styles/animation.css';

import Router from './router';

const App = () => <Router />;

export default hot(module)(App);
