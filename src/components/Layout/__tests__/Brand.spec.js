/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { Component } from '../Brand';

afterEach(() => {
  jest.restoreAllMocks();
});

it('matches snapshot', () => {
  const wrapper = shallow(<Component />);

  expect(wrapper).toMatchSnapshot();
});

it('does not update on props changes', () => {
  const renderSpy = jest.spyOn(Component.prototype, 'render');
  const wrapper = shallow(<Component />);

  expect(renderSpy).toHaveBeenCalledTimes(1);

  wrapper.setProps({
    someProp: true,
  });

  expect(renderSpy).toHaveBeenCalledTimes(1);
});
