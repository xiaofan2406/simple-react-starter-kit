/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { Component } from '../Layout';

test('Layout component matches snapshot', () => {
  const wrapper = shallow(
    <Component>
      <div>child</div>
    </Component>
  );

  expect(wrapper).toMatchSnapshot();
});
