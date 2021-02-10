export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';
export const ADD_COLOR_REQUEST_ACTION = 'ADD_COLOR_REQUEST';
export const DELETE_COLOR_ACTION = 'DELETE_COLOR';

export const createRefreshColorsRequestAction = () => ({
  type: REFRESH_COLORS_REQUEST_ACTION,
});

export const createRefreshColorsDoneAction = colors => ({
  type: REFRESH_COLORS_DONE_ACTION,
  colors,
});

export const refreshColors = () => {
  // this is the function we are dispatching into the store which
  // will be intercepted by the middleware
  // this is the thunk function action
  return dispatch => {
    dispatch(createRefreshColorsRequestAction());
    return fetch('http://localhost:3060/colors')
      .then(res => res.json())
      .then(colors => {
        dispatch(createRefreshColorsDoneAction(colors));
      });
  };
};

export const createAddColorRequestAction = color => ({
  type: ADD_COLOR_REQUEST_ACTION,
  color,
});

export const addColor = color => {

  return dispatch => {
    dispatch(createAddColorRequestAction(color));
    return fetch('http://localhost:3060/colors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(color),
    })
      .then(() => dispatch(refreshColors()));
  };

};

export const createDeleteColorAction = colorId => ({
  type: DELETE_COLOR_ACTION,
  colorId,
});
