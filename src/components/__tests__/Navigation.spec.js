import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigation';

test('Navigation component matches snapshot', () => {
  const { container } = render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );

  expect(container.firstChild).toMatchSnapshot();
});
