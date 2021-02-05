import { combineReducers } from 'redux';

import {
  ADD_ACTION,
  SUBTRACT_ACTION,
  MULTIPLY_ACTION,
  DIVIDE_ACTION,
} from '../actions/calc-tool.actions';

// Reducer is a pure function

// 4 qualities

// 1. The only data which can be used in the pure function must be passed in via parameters
// 2. You can never, ever mutate parameters
// 3. No side effects
// 4. The only output value from the function is what you return from the function

export const resultReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return state + action.value;
    case SUBTRACT_ACTION:
      return state - action.value;
    case MULTIPLY_ACTION:
      return state * action.value;
    case DIVIDE_ACTION:
      return state / action.value;
    default:
      return state;
  }
};

// export const calcToolReducer = (state = {}, action) => {
//   return {
//     ...state,
//     result: resultReducer(state.result, action),
//   };
// };

export const calcToolReducer = combineReducers({
  result: resultReducer,
});
