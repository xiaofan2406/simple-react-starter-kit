/* @flow */
import React from 'react';
import { renderWithRouter } from 'utils/testing';
import { Component } from '../NotFound';

test('NotFound component matches snapshot', () => {
  const { container } = renderWithRouter(<Component />);

  expect(container.firstChild).toMatchSnapshot();
});
