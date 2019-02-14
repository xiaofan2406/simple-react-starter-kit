import React from 'react';
import { render } from 'react-testing-library';
import Navigation from '../Navigation';

test('Navigation component matches snapshot', () => {
  const { container } = render(<Navigation />);

  expect(container.firstChild).toMatchSnapshot();
});
