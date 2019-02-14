import React from 'react';
import { renderWithRouter } from 'utils/testing';
import Navigation from '../Navigation';

test('Navigation component matches snapshot', () => {
  const { container } = renderWithRouter(<Navigation />);

  expect(container.firstChild).toMatchSnapshot();
});
