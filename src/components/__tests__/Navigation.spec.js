import React from 'react';
import { render } from '@testing-library/react';
import Navigation from '../Navigation';

test('Navigation component matches snapshot', () => {
  const { container } = render(<Navigation />);

  expect(container.firstChild).toMatchSnapshot();
});
