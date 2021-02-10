import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  createDeleteColorAction,
  refreshColors,
} from '../actions/color-tool.actions';

import { ColorList } from '../components/ColorList';

export const ColorListContainer = () => {
  const isLoading = useSelector(state => state.isLoading);
  const colors = useSelector(state => state.colors);

  // the dispatch function reference, never changes
  const dispatch = useDispatch();

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          onRefreshColors: refreshColors,
          onDeleteColor: createDeleteColorAction,
        },
        dispatch,
      ),
    [dispatch],
  );

  return <ColorList colors={colors} isLoading={isLoading} {...actions} />;
};
