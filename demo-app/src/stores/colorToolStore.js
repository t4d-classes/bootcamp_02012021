import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { colorToolReducer } from '../reducers/color-tool.reducers';

export const colorToolStore = createStore(
  colorToolReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
