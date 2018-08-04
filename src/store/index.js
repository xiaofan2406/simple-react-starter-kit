import { actions as greetActions, selectors as greetSelectors } from './greet';

export const actions = {
  greet: greetActions,
};

export const selectors = {
  greet: greetSelectors,
};

export { default as configureStore } from './configureStore';
