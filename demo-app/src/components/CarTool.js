import { useState } from 'react';

import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const [ cars, setCars ] = useState([ ...props.cars ]);

  const addCar = (car) => {

    setCars([
      ...cars,
      {
        ...car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      },
    ]);
  };


  return (
    <>
      <header>
        <h1>Car Tool</h1>
      </header>
      <CarTable cars={cars} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar}  />
    </>
  );

};