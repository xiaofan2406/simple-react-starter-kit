import React from 'react';
import { render } from 'react-testing-library';
import Layout from '../Layout';

test('Layout component matches snapshot', () => {
  const { container } = render(
    <Layout>
      <div>child</div>
    </Layout>
  );

  expect(container.firstChild).toMatchSnapshot();
});
