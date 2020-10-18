import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navigation from '../Navigation';

test('Navigation component matches snapshot', () => {
  const { container } = render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );

  expect(container.firstChild).toMatchSnapshot();
});
