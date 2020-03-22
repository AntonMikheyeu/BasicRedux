import { ACTIONS } from './types';
import { combineReducers } from 'redux';

function countReducer(state = 0, action) {
  if (action.type === ACTIONS.INCREMENT) {
    return ++state;
  }

  if (action.type === ACTIONS.DECREMENT) {
    return --state;
  }

  return state;
};

const themeReducer = (_state, action) => {
  if (action.type === ACTIONS.DARK) {
    return "dark";
  }

  return "";
}

export const rootReducer = combineReducers({
  counter: countReducer,
  theme: themeReducer
});
