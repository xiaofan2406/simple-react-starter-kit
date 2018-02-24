import React from 'react';
import { shallow } from 'enzyme';

import { Component } from '../Navigation';

it('should match snapshot', () => {
  const props = { classes: {} };
  const component = shallow(<Component {...props} />);

  expect(component).toMatchSnapshot();
});
