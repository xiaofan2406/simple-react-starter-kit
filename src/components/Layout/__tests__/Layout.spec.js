import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import Layout from '../Layout';

test('Layout component matches snapshot', () => {
  const { container } = render(
    <Layout>
      <div>child</div>
    </Layout>
  );

  expect(container.firstChild).toMatchSnapshot();
});
