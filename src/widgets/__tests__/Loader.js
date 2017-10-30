import React from 'react';
import { mount } from 'enzyme';

import Loader from '../Loader';

it('should match snapshot', () => {
  const component = mount(<Loader />);

  expect(component).toMatchSnapshot();
});
