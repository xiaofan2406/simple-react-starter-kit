import { combineReducers } from 'redux';

export const initialMessage = 'World';

export const messageReducer = (state = initialMessage, action) => {
  switch (action.type) {
    case 'greet/SET_MESSAGE':
      return action.payload;
    case 'greet/RESET':
      return initialMessage;
    default:
      return state;
  }
};

export const initialTimes = 1;

export const timesReducer = (state = initialTimes, action) => {
  switch (action.type) {
    case 'greet/SET_TIMES':
      return action.payload;
    case 'greet/RESET':
      return initialTimes;
    default:
      return state;
  }
};

export default combineReducers({
  message: messageReducer,
  times: timesReducer,
});
