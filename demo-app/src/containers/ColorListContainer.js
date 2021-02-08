import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createDeleteColorAction } from '../actions/color-tool.actions';

import { ColorList } from '../components/ColorList';

export const ColorListContainer = () => {
  const colors = useSelector(state => state.colors);
  const actions = bindActionCreators(
    {
      onDeleteColor: createDeleteColorAction,
    },
    useDispatch(),
  );

  return <ColorList colors={colors} onDeleteColor={actions.onDeleteColor} />;
};
