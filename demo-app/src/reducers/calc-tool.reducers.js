import { combineReducers } from 'redux';

import { ADD_ACTION, SUBTRACT_ACTION } from '../actions/calc-tool.actions';

export const resultReducer = (state = 0, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return state + action.value;
    case SUBTRACT_ACTION:
      return state - action.value;
    default:
      return state;
  }
};

export const calcToolReducer = combineReducers({
  result: resultReducer,
});
