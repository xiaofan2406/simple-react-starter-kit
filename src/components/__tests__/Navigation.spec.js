/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { Component } from '../Navigation';

test('Navigation component matches snapshot', () => {
  const props = { classes: {} };
  const component = shallow(<Component {...props} />);

  expect(component).toMatchSnapshot();
});
