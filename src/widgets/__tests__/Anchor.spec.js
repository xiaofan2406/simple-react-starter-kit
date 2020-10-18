import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import Anchor from '../Anchor';

test('Anchor matches snapshot', () => {
  const { container } = render(
    <Anchor href="https://github.com/xiaofan2406/react-starter-kit">
      link
    </Anchor>
  );

  expect(container.firstChild).toMatchSnapshot();
});
