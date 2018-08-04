/* @flow */
declare type GreetSetMessageAction = {
  type: 'greet/SET_MESSAGE',
  payload: string,
};

declare type GreetSetTimesAction = {
  type: 'greet/SET_TIMES',
  payload: number,
};

declare type GreetResetAction = {
  type: 'greet/RESET',
};

declare type GreetState = {
  message: string,
  times: number,
};

declare type StoreState = {
  greet: GreetState,
};

declare type StoreAction =
  | GreetSetMessageAction
  | GreetSetTimesAction
  | GreetResetAction;
