import React from 'react';
import { css } from 'emotion';

const cssClass = css`
  font-size: 48px;
`;

function Home() {
  return <div className={cssClass}>Hello world!</div>;
}

export default Home;
