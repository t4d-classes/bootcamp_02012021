import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addColor } from '../actions/color-tool.actions';

import { ColorForm } from '../components/ColorForm';

export const AddColorFormContainer = () => {
  const dispatch = useDispatch();

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          onAddColor: addColor,
        },
        dispatch,
      ),
    [dispatch],
  );

  return (
    <ColorForm buttonText="Add Color" onSubmitColor={actions.onAddColor} />
  );
};
