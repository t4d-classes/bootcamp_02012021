import PropTypes from 'prop-types';

import { CarPropType } from '../prop-types/cars';

export const CarViewRow = ({ car, onDeleteCar: deleteCar }) => {
  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <button type="button" onClick={() => deleteCar(car.id)}>X</button>
      </td>
    </tr>
  );
};

CarViewRow.propTypes = {
  car: CarPropType,
  onDeleteCar: PropTypes.func.isRequired,
};