import PropTypes from 'prop-types';

import { CarsPropType } from '../prop-types/cars';
import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

export const CarTable = ({
  cars,
  editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Car</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car =>
          car.id === editCarId ? (
            <CarEditRow key={car.id} car={car} />
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
