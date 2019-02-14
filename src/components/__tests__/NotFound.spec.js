import React from 'react';
import { renderWithRouter } from 'utils/testing';
import NotFound from '../NotFound';

test('NotFound component matches snapshot', () => {
  const { container } = renderWithRouter(<NotFound />);

  expect(container.firstChild).toMatchSnapshot();
});
