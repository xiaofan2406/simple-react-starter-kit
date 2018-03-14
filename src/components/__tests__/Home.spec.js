import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

it('should match snapshot', () => {
  const component = shallow(<Home />);

  expect(component).toMatchSnapshot();
});
