import { combineReducers } from 'redux';

import {
  ADD_ACTION,
  SUBTRACT_ACTION,
  MULTIPLY_ACTION,
  DIVIDE_ACTION,
  DELETE_HISTORY_ENTRY_ACTION,
  CLEAR_ACTION,
} from '../actions/calc-tool.actions';

// Reducer is a pure function

// 4 qualities

// 1. The only data which can be used in the pure function must be passed in via parameters
// 2. You can never, ever mutate parameters
// 3. No side effects
// 4. The only output value from the function is what you return from the function

export const historyReducer = (history = [], action) => {
  switch (action.type) {
    case ADD_ACTION:
    case SUBTRACT_ACTION:
    case MULTIPLY_ACTION:
      return [
        ...history,
        {
          id: Math.max(...history.map(entry => entry.id), 0) + 1,
          opName: action.type,
          opValue: action.value,
        },
      ];
    case DIVIDE_ACTION:
      if (action.value === 0) {
        return history;
      }
      return [
        ...history,
        {
          id: Math.max(...history.map(entry => entry.id), 0) + 1,
          opName: action.type,
          opValue: action.value,
        },
      ];
    case CLEAR_ACTION:
      return [];
    case DELETE_HISTORY_ENTRY_ACTION:
      return history.filter(entry => entry.id !== action.entryId);
    default:
      return history;
  }
};

const errorMessageReducer = (errorMessage = '', action) => {
  if (action.type === DIVIDE_ACTION && action.value === 0) {
    return 'Cannot divide by zero.';
  }

  if (
    [
      ADD_ACTION,
      SUBTRACT_ACTION,
      MULTIPLY_ACTION,
      DIVIDE_ACTION,
      CLEAR_ACTION,
    ].includes(action.type)
  ) {
    return '';
  }

  return errorMessage;
};

export const calcToolReducer = combineReducers({
  history: historyReducer,
  errorMessage: errorMessageReducer,
});
