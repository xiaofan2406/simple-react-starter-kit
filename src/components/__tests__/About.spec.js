import React from 'react';
import { render } from '@testing-library/react';
import About from '../About';

test('About component matches snapshot', () => {
  const { container } = render(<About />);

  expect(container.firstChild).toMatchSnapshot();
});
