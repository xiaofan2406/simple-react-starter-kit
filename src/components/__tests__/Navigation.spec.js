/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { Component } from '../Navigation';

test('Navigation component matches snapshot', () => {
  const wrapper = shallow(<Component />);

  expect(wrapper).toMatchSnapshot();
});
