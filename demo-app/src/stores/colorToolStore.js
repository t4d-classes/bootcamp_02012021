import { createStore } from 'redux';

import { colorToolReducer } from '../reducers/color-tool.reducers';

export const colorToolStore = createStore(colorToolReducer);
