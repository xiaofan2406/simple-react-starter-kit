/* @flow */
import React from 'react';
import { render } from 'react-testing-library';
import { Component } from '../Layout';

test('Layout component matches snapshot', () => {
  const { container } = render(
    <Component>
      <div>child</div>
    </Component>
  );

  expect(container.firstChild).toMatchSnapshot();
});
