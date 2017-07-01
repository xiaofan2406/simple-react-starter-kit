import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Loader from './Loader';

it('should match snapshot', () => {
  const props = { classes: {} };
  const component = mount(<Loader {...props} />);

  expect(toJson(component)).toMatchSnapshot();
});
