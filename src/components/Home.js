import React from 'react';
import { css } from '@emotion/core';
import { spacing } from 'styles';
import { Anchor } from 'widgets';

const Home = () => (
  <div>
    <div
      css={css`
        font-size: 48px;
        text-align: center;
        margin-bottom: ${spacing.breath}px;
      `}
    >
      Hello world!
    </div>
    <table
      css={css`
        margin-top: ${spacing.breath}px;
        & td {
          padding: ${spacing.internal}px;
        }
      `}
    >
      <tbody>
        <tr>
          <td>React</td>
          <td>
            <Anchor href="https://reactjs.org/docs/thinking-in-react.html">
              Docs
            </Anchor>
          </td>
          <td>
            <Anchor href="https://github.com/facebook/react/">Github</Anchor>
          </td>
        </tr>
        <tr>
          <td>Reach Router</td>
          <td>
            <Anchor href="https://reach.tech/router">Docs</Anchor>
          </td>
          <td>
            <Anchor href="https://github.com/reach/router">Github</Anchor>
          </td>
        </tr>
        <tr>
          <td>Emotion</td>
          <td>
            <Anchor href="https://emotion.sh/docs/composition">Docs</Anchor>
          </td>
          <td>
            <Anchor href="https://github.com/emotion-js/emotion">Github</Anchor>
          </td>
        </tr>
        <tr>
          <td>Create React App</td>
          <td>
            <Anchor href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents">
              Docs
            </Anchor>
          </td>
          <td>
            <Anchor href="https://github.com/facebook/create-react-app/tree/next/packages/react-scripts">
              Github
            </Anchor>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Home;
