import React from 'react';
import { render } from 'react-testing-library';

import Anchor from '../Anchor';

test('Anchor matches snapshot', () => {
  const { container } = render(
    <Anchor href="https://github.com/xiaofan2406/react-starter-kit" />
  );

  expect(container.firstChild).toMatchSnapshot();
});
