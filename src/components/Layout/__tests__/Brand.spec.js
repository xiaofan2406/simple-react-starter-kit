/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { Component } from '../Brand';

afterEach(() => {
  jest.restoreAllMocks();
});

it('matches snapshot', () => {
  const props = { classes: {} };
  const wrapper = shallow(<Component {...props} />);

  expect(wrapper).toMatchSnapshot();
});

it('does not update on props changes', () => {
  const renderSpy = jest.spyOn(Component.prototype, 'render');
  const props = { classes: {} };
  const wrapper = shallow(<Component {...props} />);

  expect(renderSpy).toHaveBeenCalledTimes(1);

  wrapper.setProps({
    classes: { someClass: {} },
  });

  expect(renderSpy).toHaveBeenCalledTimes(1);
});
