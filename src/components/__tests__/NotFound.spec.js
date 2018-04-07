/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { Component } from '../NotFound';

test('NotFound component matches snapshot', () => {
  const wrapper = shallow(<Component />);

  expect(wrapper).toMatchSnapshot();
});
