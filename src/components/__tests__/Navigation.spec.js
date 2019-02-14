import React from 'react';
import { renderWithRouter } from 'utils/testing';
import { Component } from '../Navigation';

test('Navigation component matches snapshot', () => {
  const { container } = renderWithRouter(<Component />);

  expect(container.firstChild).toMatchSnapshot();
});
