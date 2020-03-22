import { ACTIONS } from './types';

export const increment = () => ({ type: ACTIONS.INCREMENT });
export const decrement = () => ({ type: ACTIONS.DECREMENT });
export const init = () => ({ type: ACTIONS.INIT });
export const asyncIncrement = () => {
  return dispatch => {
    setTimeout(() => dispatch({ type: ACTIONS.INCREMENT }), 2000);
  }
};
export const darkTheme = () => ({ type: ACTIONS.DARK });
