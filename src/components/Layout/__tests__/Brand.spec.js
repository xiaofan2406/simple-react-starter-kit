import React from 'react';
import { render } from '@testing-library/react';
import Brand from '../Brand';

it('matches snapshot', () => {
  const { container } = render(<Brand />);
  expect(container.firstChild).toMatchSnapshot();
});
