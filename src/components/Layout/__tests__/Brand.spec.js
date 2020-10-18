import React from 'react';
import { render } from '@testing-library/react';
import { expect, it } from '@jest/globals';
import Brand from '../Brand';

it('matches snapshot', () => {
  const { container } = render(<Brand />);
  expect(container.firstChild).toMatchSnapshot();
});
