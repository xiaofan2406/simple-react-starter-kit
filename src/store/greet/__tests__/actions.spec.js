/* @flow */
import * as actions from '../actions';

test('setMessage create a correct action', () => {
  const message = 'Hello';
  const expectedAction = {
    type: 'greet/SET_MESSAGE',
    payload: message,
  };

  expect(actions.setMessage(message)).toEqual(expectedAction);
});

test('setTimes create a correct action', () => {
  const times = 2;
  const expectedAction = {
    type: 'greet/SET_TIMES',
    payload: times,
  };

  expect(actions.setTimes(times)).toEqual(expectedAction);
});

test('reset create a correct action', () => {
  const expectedAction = {
    type: 'greet/RESET',
  };

  expect(actions.reset()).toEqual(expectedAction);
});
