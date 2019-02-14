export const setMessage = payload => ({
  type: 'greet/SET_MESSAGE',
  payload,
});

export const setTimes = payload => ({
  type: 'greet/SET_TIMES',
  payload,
});

export const reset = () => ({
  type: 'greet/RESET',
});
