import PropTypes from 'prop-types';

import { CarsPropType } from '../prop-types/cars';
import { CarViewRow } from './CarViewRow';

export const CarTable = ({ cars, onDeleteCar: deleteCar }) => {

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
          <CarViewRow key={car.id} car={car} onDeleteCar={deleteCar} />)}
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