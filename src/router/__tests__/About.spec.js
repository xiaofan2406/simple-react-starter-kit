import React from 'react';
import { shallow } from 'enzyme';

import About from '../About';

it('should match snapshot', () => {
  const component = shallow(<About />);

  expect(component).toMatchSnapshot();
});
