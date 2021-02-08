import { combineReducers } from 'redux';
import {
  ADD_COLOR_ACTION,
  DELETE_COLOR_ACTION,
} from '../actions/color-tool.actions';

const colorsReducer = (colors = [], action) => {
  switch (action.type) {
    case ADD_COLOR_ACTION:
      return [
        ...colors,
        {
          ...action.color,
          id: Math.max(...colors.map(c => c.id), 0) + 1,
        },
      ];
    case DELETE_COLOR_ACTION:
      return colors.filter(c => c.id !== action.colorId);
    default:
      return colors;
  }
};

export const colorToolReducer = combineReducers({
  colors: colorsReducer,
});