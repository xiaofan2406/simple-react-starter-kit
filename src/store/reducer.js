import { combineReducers } from 'redux';

import { reducer as greetReducer } from './greet';

export default combineReducers({
  greet: greetReducer,
});
