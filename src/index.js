/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';

const rootElement = document.getElementById('root');

if (process.env.NODE_ENV === 'development') {
  const AppContainer = require('react-hot-loader').AppContainer;

  ReactDOM.render(
    <AppContainer>
      <Router />
    </AppContainer>,
    rootElement
  );

  if (module.hot) {
    module.hot.accept('./router', () => {
      const NextRouter = require('./router').default;
      ReactDOM.render(
        <AppContainer>
          <NextRouter />
        </AppContainer>,
        rootElement
      );
    });
  }
} else {
  ReactDOM.render(<Router />, rootElement);
}
