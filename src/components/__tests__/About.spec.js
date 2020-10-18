import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import About from '../About';

test('About component matches snapshot', () => {
  const { container } = render(<About />);

  expect(container.firstChild).toMatchSnapshot();
});
