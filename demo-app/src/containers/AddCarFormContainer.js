import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createAddCarAction } from '../actions/car-tool.actions';

import { CarForm } from '../components/CarForm';

export const AddCarFormContainer = () => {
  const actions = bindActionCreators(
    {
      onAddCar: createAddCarAction,
    },
    useDispatch(),
  );

  return <CarForm buttonText="Add Car" onSubmitCar={actions.onAddCar} />;
};
