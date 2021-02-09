import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sortCarsSelector } from '../selectors/car-tool.selectors';
import {
  createEditCarAction,
  createDeleteCarAction,
  createSaveCarAction,
  createCancelCarAction,
  createSortCarsAction,
} from '../actions/car-tool.actions';

import { CarTable } from '../components/CarTable';

export const CarTableContainer = () => {
  const cars = useSelector(sortCarsSelector);
  const editCarId = useSelector(({ editCarId }) => editCarId);
  const actions = bindActionCreators(
    {
      onEditCar: createEditCarAction,
      onDeleteCar: createDeleteCarAction,
      onSaveCar: createSaveCarAction,
      onCancelCar: createCancelCarAction,
      onUpdateSortField: createSortCarsAction,
    },
    useDispatch(),
  );

  return <CarTable cars={cars} editCarId={editCarId} {...actions} />;
};
