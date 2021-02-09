import PropTypes from 'prop-types';

import { CarsPropType } from '../prop-types/cars';
import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

export const CarTable = ({
  cars,
  editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
  onUpdateSortField: updateSortField,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => updateSortField('id')}>Id</th>
          <th onClick={() => updateSortField('make')}>Make</th>
          <th onClick={() => updateSortField('model')}>Model</th>
          <th onClick={() => updateSortField('year')}>Year</th>
          <th onClick={() => updateSortField('color')}>Car</th>
          <th onClick={() => updateSortField('price')}>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {!cars.length && (
          <tr>
            <td colSpan="7">There are no cars.</td>
          </tr>
        )}
        {cars.map(car =>
          car.id === editCarId ? (
            <CarEditRow
              key={car.id}
              car={car}
              onSaveCar={saveCar}
              onCancelCar={cancelCar}
            />
          ) : (
            <CarViewRow
              key={car.id}
              car={car}
              onEditCar={editCar}
              onDeleteCar={deleteCar}
            />
          ),
        )}
      </tbody>
    </table>
  );
};

CarTable.defaultProps = {
  cars: [],
};

CarTable.propTypes = {
  cars: CarsPropType,
  onDeleteCar: PropTypes.func.isRequired,
};
