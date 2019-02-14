import React from 'react';
import { render } from 'react-testing-library';
import { Router } from 'react-router-dom';
import createMemoryHistory from 'history/createMemoryHistory';

export const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => ({
  ...render(<Router history={history}>{ui}</Router>),
  // adding `history` to the returned utilities to allow us
  // to reference it in our tests (just try to avoid using
  // this to test implementation details).
  history,
});
