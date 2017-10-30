import React from 'react';
import { shallow } from 'enzyme';

import Contact from '../Contact';

it('should match snapshot', () => {
  const component = shallow(<Contact />);

  expect(component).toMatchSnapshot();
});
