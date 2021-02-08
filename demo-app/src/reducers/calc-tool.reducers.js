import { combineReducers } from 'redux';

import {
  ADD_ACTION,
  SUBTRACT_ACTION,
  MULTIPLY_ACTION,
  DIVIDE_ACTION,
  DELETE_HISTORY_ENTRY_ACTION,
} from '../actions/calc-tool.actions';

// Reducer is a pure function

// 4 qualities

// 1. The only data which can be used in the pure function must be passed in via parameters
// 2. You can never, ever mutate parameters
// 3. No side effects
// 4. The only output value from the function is what you return from the function

export const resultReducer = (result = 0, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return result + action.value;
    case SUBTRACT_ACTION:
      return result - action.value;
    case MULTIPLY_ACTION:
      return result * action.value;
    case DIVIDE_ACTION:
      if (action.value === 0) {
        return result;
      }
      return result / action.value;
    default:
      return result;
  }
};

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
    [ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(
      action.type,
    )
  ) {
    return '';
  }

  return errorMessage;
};

// export const calcToolReducer = (state = {}, action) => {
//   return {
//     ...state,
//     result: resultReducer(state.result, action),
//   };
// };

export const calcToolReducer = combineReducers({
  result: resultReducer,
  history: historyReducer,
  errorMessage: errorMessageReducer,
});
