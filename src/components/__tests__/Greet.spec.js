import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { selectors } from 'store';
import { Component, mapStateToProps } from '../Greet';

const props = {
  message: 'World',
  setMessage: jest.fn(),
  times: 1,
  setTimes: jest.fn(),
  reset: jest.fn(),
  greeting: 'World',
};

test('Greet matches snapshot', () => {
  const { container } = render(<Component {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});

test('mapStateToProps', () => {
  const mockState = { greet: {} };
  const getMessageSpy = jest.spyOn(selectors.greet, 'getMessage');
  const getTimesSpy = jest.spyOn(selectors.greet, 'getTimes');
  const getGreetingSpy = jest.spyOn(selectors.greet, 'getGreeting');
  mapStateToProps(mockState);

  expect(getMessageSpy).toHaveBeenLastCalledWith(mockState);
  expect(getTimesSpy).toHaveBeenLastCalledWith(mockState);
  expect(getGreetingSpy).toHaveBeenLastCalledWith(mockState);
});

test('setMessage called on messageInput change', () => {
  const { setMessage } = props;
  const { getByTestId } = render(<Component {...props} />);

  expect(setMessage).toHaveBeenCalledTimes(0);

  const messageInput = getByTestId('messageInput');
  fireEvent.change(messageInput, { target: { value: 'hey' } });

  expect(setMessage).toHaveBeenCalledTimes(1);
  expect(setMessage).toHaveBeenCalledWith('hey');
});

test('setTimes called on messageInput change', () => {
  const { setTimes } = props;
  const { getByTestId } = render(<Component {...props} />);

  expect(setTimes).toHaveBeenCalledTimes(0);

  const timesInput = getByTestId('timesInput');
  fireEvent.change(timesInput, { target: { value: '3' } });

  expect(setTimes).toHaveBeenCalledTimes(1);
  expect(setTimes).toHaveBeenCalledWith(3);
});
