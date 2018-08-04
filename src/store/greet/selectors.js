/* @flow */
export const getMessage = (state: StoreState) => state.greet.message;

export const getTimes = (state: StoreState) => state.greet.times;

export const getGreeting = (state: StoreState) =>
  Array(getTimes(state))
    .fill(getMessage(state))
    .join(' ');
