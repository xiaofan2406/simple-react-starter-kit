/* @flow */
export const setMessage = (payload: string): GreetSetMessageAction => ({
  type: 'greet/SET_MESSAGE',
  payload,
});

export const setTimes = (payload: number): GreetSetTimesAction => ({
  type: 'greet/SET_TIMES',
  payload,
});

export const reset = (): GreetResetAction => ({
  type: 'greet/RESET',
});
