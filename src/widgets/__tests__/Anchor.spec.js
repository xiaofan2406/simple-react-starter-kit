import React from 'react';
import { shallow } from 'enzyme';

import Anchor from '../Anchor';

it('should match snapshot', () => {
  const wrapper = shallow(
    <Anchor href="https://github.com/xiaofan2406/react-starter-kit" />
  );

  expect(wrapper).toMatchSnapshot();
});
