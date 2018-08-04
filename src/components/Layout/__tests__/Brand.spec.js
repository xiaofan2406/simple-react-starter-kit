/* @flow */
import React from 'react';
import { render } from 'react-testing-library';
import { Component } from '../Brand';

afterEach(() => {
  jest.restoreAllMocks();
});

it('matches snapshot', () => {
  const { container } = render(<Component />);

  expect(container.firstChild).toMatchSnapshot();
});

it('does not update on props changes', () => {
  const renderSpy = jest.spyOn(Component.prototype, 'render');
  const { rerender } = render(<Component />);

  expect(renderSpy).toHaveBeenCalledTimes(1);

  rerender(<Component />);

  expect(renderSpy).toHaveBeenCalledTimes(1);
});
