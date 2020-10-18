import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../NotFound';

test('NotFound component matches snapshot', () => {
  const { container } = render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );

  expect(container.firstChild).toMatchSnapshot();
});
