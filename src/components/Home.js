/* @flow */
import React from 'react';
import { css } from 'react-emotion';
import { spacing } from 'styles';

const cssHome = css`
  & > .title {
    font-size: 48px;
    text-align: center;
    margin-bottom: ${spacing.breath}px;
  }
  & > table {
    & td {
      padding: ${spacing.internal}px;
    }
  }
`;

const Home = () => (
  <div className={cssHome}>
    <div className="title">Hello world!</div>
    <table>
      <tr>
        <td>React</td>
        <td>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://reactjs.org/docs/thinking-in-react.html"
          >
            Docs
          </a>
        </td>
        <td>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/facebook/react/"
          >
            Github
          </a>
        </td>
      </tr>
      <tr>
        <td>React Router v4</td>
        <td>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://reacttraining.com/react-router/web/example/basic"
          >
            Docs
          </a>
        </td>
        <td>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ReactTraining/react-router"
          >
            Github
          </a>
        </td>
      </tr>
      <tr>
        <td>Redux</td>
        <td>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://redux.js.org/introduction/three-principles"
          >
            Docs
          </a>
        </td>
        <td>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/reactjs/redux"
          >
            Github
          </a>
        </td>
      </tr>
      <tr>
        <td>Mobx</td>
        <td>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://mobx.js.org/best/react-performance.html"
          >
            Docs
          </a>
        </td>
        <td>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/mobxjs/mobx"
          >
            Github
          </a>
        </td>
      </tr>
      <tr>
        <td>Emotion</td>
        <td>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://emotion.sh/docs/composition"
          >
            Docs
          </a>
        </td>
        <td>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/emotion-js/emotion"
          >
            Github
          </a>
        </td>
      </tr>
      <tr>
        <td>Create React App</td>
        <td>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents"
          >
            Docs
          </a>
        </td>
        <td>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/facebook/create-react-app/tree/next/packages/react-scripts"
          >
            Github
          </a>
        </td>
      </tr>
    </table>
  </div>
);

export default Home;
