/* @flow */
import React from 'react';
import { renderWithRedux } from 'utils/testing';
import Home from '../Home';

test('Home component matches snapshot', () => {
  const { container } = renderWithRedux(<Home />);

  expect(container.firstChild).toMatchSnapshot();
});
