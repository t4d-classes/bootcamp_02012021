import { useCarToolStore } from '../hooks/useCarToolStore';
import { CarsPropType } from '../prop-types/cars';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ToolFooter } from './ToolFooter';

export const CarTool = ({ cars: initialCars }) => {
  const {
    cars,
    editCarId,
    addCar,
    editCar,
    deleteCar,
    saveCar,
    cancelCar,
  } = useCarToolStore(initialCars);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable
        cars={cars}
        editCarId={editCarId}
        onEditCar={editCar}
        onDeleteCar={deleteCar}
        onSaveCar={saveCar}
        onCancelCar={cancelCar}
      />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );
};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: CarsPropType,
};
