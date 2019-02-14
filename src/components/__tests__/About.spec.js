import React from 'react';
import { render } from 'react-testing-library';
import About from '../About';

test('About component matches snapshot', () => {
  const { container } = render(<About />);

  expect(container.firstChild).toMatchSnapshot();
});
