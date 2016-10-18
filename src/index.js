import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';


const rootElement = document.getElementById('root');

if (process.env.NODE_ENV === 'development') {
  const AppContainer = require('react-hot-loader').AppContainer; // eslint-disable-line

  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    rootElement
  );

  // react-hot-loader setup
  if (module.hot) {
    module.hot.accept('./Root', () => {
      const NextRoot = require('./Root').default; // eslint-disable-line
      ReactDOM.render(
        <AppContainer>
          <NextRoot />
        </AppContainer>,
        rootElement
      );
    });
  }
} else {
  ReactDOM.render(
    <Root />,
    rootElement
  );
}
