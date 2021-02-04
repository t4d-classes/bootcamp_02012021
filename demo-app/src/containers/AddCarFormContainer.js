import { useCarToolStoreContext } from '../contexts/carToolStoreContext';
import { CarForm } from './CarForm';

export const AddCarFormContainer = () => {
  const { addCar } = useCarToolStoreContext();

  return <CarForm buttonText="Add Car" onSubmitCar={addCar} />;
};
