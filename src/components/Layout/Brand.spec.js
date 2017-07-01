import React from 'react';
import renderer from 'react-test-renderer';

import Brand from './Brand';

it('should match snapshot', () => {
  const component = renderer.create(<Brand />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
