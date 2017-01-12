import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import AppRouter from './router';


const rootElement = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <AppRouter />
  </AppContainer>,
  rootElement
);

// react-hot-loader setup
if (module.hot) {
  module.hot.accept('./router', () => {
    const NextAppRouter = require('./router').default; // eslint-disable-line
    ReactDOM.render(
      <AppContainer>
        <NextAppRouter />
      </AppContainer>,
      rootElement
    );
  });
}
