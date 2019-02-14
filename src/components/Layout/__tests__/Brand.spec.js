import React from 'react';
import { render } from 'react-testing-library';
import Brand from '../Brand';

it('matches snapshot', () => {
  const { container } = render(<Brand />);
  expect(container.firstChild).toMatchSnapshot();
});
