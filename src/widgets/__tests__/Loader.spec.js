import React from 'react';
import { mount } from 'enzyme';

import Loader from '../Loader';

it('should match snapshot', () => {
  const wrapper = mount(<Loader />);

  expect(wrapper).toMatchSnapshot();
});
