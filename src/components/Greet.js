/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
import { theme, fontSizes, spacing, verticalScroll } from 'styles';
import { actions, selectors } from 'store/greet';

const cssGreet = css`
  margin: 0px auto;
  width: 480px;
  & > .controls {
    text-align: center;
    & input {
      border: none;
      border-bottom: 1px solid ${theme.borderColor};
      outline: none;
      width: 100px;
      text-align: center;
      &:focus {
        border-bottom: 1px solid ${theme.primaryColor};
      }
    }
    & > button {
      margin-left: 1em;
      outline: none;
      background: none;
      border: 1px solid ${theme.borderColor};
      &:hover {
        border-color: ${theme.primaryColor};
        color: ${theme.primaryColor};
      }
    }
  }
  & > .result {
    height: 280px;
    ${verticalScroll};
    margin-top: ${spacing.external}px;
    font-size: ${fontSizes.large}px;
    font-family: cursive;
    &:before {
      content: '"';
    }
    &:after {
      content: '"';
    }
  }
`;

type GreetProps = {
  message: string,
  setMessage: typeof actions.setMessage,
  times: number,
  setTimes: typeof actions.setTimes,
  reset: typeof actions.reset,
  greeting: string,
};

const Greet = ({
  message,
  setMessage,
  times,
  setTimes,
  reset,
  greeting,
}: GreetProps) => {
  const handleTimesOnChange = event => {
    setTimes(+event.currentTarget.value || 0);
  };

  const handleMessageOnChange = event => {
    setMessage(event.currentTarget.value);
  };

  return (
    <div className={cssGreet}>
      <div className="controls">
        <span>Say </span>
        <input
          data-testid="messageInput"
          type="text"
          onChange={handleMessageOnChange}
          value={message}
        />{' '}
        <input
          data-testid="timesInput"
          type="number"
          min={1}
          onChange={handleTimesOnChange}
          value={times}
        />{' '}
        times
        <button onClick={reset} type="button">
          Clear
        </button>
      </div>
      <div className="result">Hello {greeting}</div>
    </div>
  );
};

export const mapStateToProps = (state: StoreState) => ({
  message: selectors.getMessage(state),
  times: selectors.getTimes(state),
  greeting: selectors.getGreeting(state),
});

export { Greet as Component };

export default connect(
  mapStateToProps,
  {
    setMessage: actions.setMessage,
    setTimes: actions.setTimes,
    reset: actions.reset,
  }
)(Greet);
