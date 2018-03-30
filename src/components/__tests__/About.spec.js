/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import About from '../About';

test('About component matches snapshot', () => {
  const wrapper = shallow(<About />);

  expect(wrapper).toMatchSnapshot();
});
