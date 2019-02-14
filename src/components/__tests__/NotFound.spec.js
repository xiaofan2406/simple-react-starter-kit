import React from 'react';
import { render } from 'react-testing-library';
import NotFound from '../NotFound';

test('NotFound component matches snapshot', () => {
  const { container } = render(<NotFound />);

  expect(container.firstChild).toMatchSnapshot();
});
