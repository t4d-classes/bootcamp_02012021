import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createAddColorAction } from '../actions/color-tool.actions';

import { ColorForm } from '../components/ColorForm';

export const AddColorFormContainer = () => {
  const actions = bindActionCreators(
    {
      onAddColor: createAddColorAction,
    },
    useDispatch(),
  );

  return (
    <ColorForm buttonText="Add Color" onSubmitColor={actions.onAddColor} />
  );
};
