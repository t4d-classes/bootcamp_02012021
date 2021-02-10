import { combineReducers } from 'redux';
import {
  REFRESH_COLORS_DONE_ACTION,
  ADD_COLOR_ACTION,
  DELETE_COLOR_ACTION,
} from '../actions/color-tool.actions';

const isLoadingReducer = (isLoading = false, action) => {
  if (action.type.endsWith('REQUEST')) {
    return true;
  }

  if (action.type.endsWith('DONE')) {
    return false;
  }

  return isLoading;
};

const colorsReducer = (colors = [], action) => {
  switch (action.type) {
    case REFRESH_COLORS_DONE_ACTION:
      return action.colors;
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
  isLoading: isLoadingReducer,
  colors: colorsReducer,
});
