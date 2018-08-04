/* @flow */
import React from 'react';
import { render } from 'react-testing-library';
import Contact from '../Contact';

test('Contact component matches snapshot', () => {
  const { container } = render(<Contact />);

  expect(container.firstChild).toMatchSnapshot();
});
