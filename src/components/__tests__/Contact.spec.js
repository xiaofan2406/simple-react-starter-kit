import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../Contact';

test('Contact component matches snapshot', () => {
  const { container } = render(<Contact />);

  expect(container.firstChild).toMatchSnapshot();
});
