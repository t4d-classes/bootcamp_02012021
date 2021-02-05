import { ADD_ACTION, SUBTRACT_ACTION } from '../actions/calc-tool.actions';

export const calcToolReducer = (state = 0, action) => {
  console.log('state: ', state, 'action: ', action);

  switch (action.type) {
    case ADD_ACTION:
      return state + action.value;
    case SUBTRACT_ACTION:
      return state - action.value;
    default:
      return state;
  }
};
