import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../Contact';

test('Contact component matches snapshot', () => {
  const component = shallow(<Contact />);

  expect(component).toMatchSnapshot();
});
