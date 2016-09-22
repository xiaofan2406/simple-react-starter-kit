/* global it, expect */
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('renders a header with img and title', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
