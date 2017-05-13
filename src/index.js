/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';

const rootElement = document.getElementById('root');

if (process.env.NODE_ENV === 'development') {
  const AppContainer = require('react-hot-loader').AppContainer;

  const render = () => {
    ReactDOM.render(
      <AppContainer>
        <Router />
      </AppContainer>,
      rootElement
    );
  };

  render();

  if (module.hot) {
    module.hot.accept('./router', render);
  }
} else {
  ReactDOM.render(<Router />, rootElement);
}
