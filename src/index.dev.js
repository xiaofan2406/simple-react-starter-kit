import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import LoadApp from './LoadApp';


const rootElement = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <LoadApp />
  </AppContainer>,
  rootElement
);

// react-hot-loader setup
if (module.hot) {
  module.hot.accept('./LoadApp', () => {
    const NextLoadApp = require('./LoadApp').default; // eslint-disable-line
    ReactDOM.render(
      <AppContainer>
        <NextLoadApp />
      </AppContainer>,
      rootElement
    );
  });
}

// temporary fix for not including react-hot-loader in production build
