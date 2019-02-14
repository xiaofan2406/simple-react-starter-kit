import {
  messageReducer,
  initialMessage,
  timesReducer,
  initialTimes,
} from '../reducer';

describe('messageReducer', () => {
  test('SET_MESSAGE is handled correctly', () => {
    const message = 'React';
    const expectedState = message;

    expect(
      messageReducer(initialMessage, {
        type: 'greet/SET_MESSAGE',
        payload: message,
      })
    ).toBe(expectedState);
  });

  test('RESET is handled correctly', () => {
    const expectedState = initialMessage;

    expect(
      messageReducer(initialMessage, {
        type: 'greet/RESET',
      })
    ).toBe(expectedState);
  });

  test('initial state is return with non-matching action', () => {
    expect(
      messageReducer(initialMessage, {
        type: 'greet/SET_TIMES',
        payload: 1,
      })
    ).toBe(initialMessage);
  });
});

describe('timesReducer', () => {
  test('SET_TIMES is handled correctly', () => {
    const times = 3;
    const expectedState = times;

    expect(
      timesReducer(initialTimes, {
        type: 'greet/SET_TIMES',
        payload: times,
      })
    ).toBe(expectedState);
  });

  test('RESET is handled correctly', () => {
    const expectedState = initialTimes;

    expect(
      timesReducer(initialTimes, {
        type: 'greet/RESET',
      })
    ).toBe(expectedState);
  });

  test('initial state is return with non-matching action', () => {
    expect(
      timesReducer(initialTimes, {
        type: 'greet/SET_MESSAGE',
        payload: 'hello',
      })
    ).toBe(initialTimes);
  });
});
