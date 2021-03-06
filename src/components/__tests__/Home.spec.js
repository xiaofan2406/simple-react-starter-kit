import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import Home from '../Home';

test('Home component matches snapshot', () => {
  const { container } = render(<Home />);

  expect(container.firstChild).toMatchSnapshot();
});
