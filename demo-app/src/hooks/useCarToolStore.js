import { useState } from 'react';

import { useList } from './useList';

export const useCarToolStore = initialCars => {
  const [cars, appendCar, replaceCar, removeCar] = useList([...initialCars]);
  const [editCarId, setEditCarId] = useState(-1);

  const addCar = car => {
    appendCar(car);
    setEditCarId(-1);
  };

  const saveCar = car => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  return {
    // cars: cars,
    cars,
    editCarId,
    addCar,
    editCar: setEditCarId,
    deleteCar,
    saveCar,
    cancelCar,
  };
};
