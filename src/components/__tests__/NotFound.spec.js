import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NotFound from '../NotFound';

test('NotFound component matches snapshot', () => {
  const { container } = render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );

  expect(container.firstChild).toMatchSnapshot();
});
