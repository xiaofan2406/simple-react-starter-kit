import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import Loader from '../Loader';

test('Loader matches snapshot', () => {
  const { container } = render(<Loader />);

  expect(container.firstChild).toMatchSnapshot();
});
