/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

test('Home component matches snapshot', () => {
  const component = shallow(<Home />);

  expect(component).toMatchSnapshot();
});
