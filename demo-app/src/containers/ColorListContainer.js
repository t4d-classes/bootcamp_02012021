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
  const actions = bindActionCreators(
    {
      onRefreshColors: refreshColors,
      onDeleteColor: createDeleteColorAction,
    },
    useDispatch(),
  );

  return <ColorList colors={colors} isLoading={isLoading} {...actions} />;
};
