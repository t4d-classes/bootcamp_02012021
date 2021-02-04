import { useCarToolStoreContext } from '../contexts/carToolStoreContext';
import { CarTable } from '../components/CarTable';

export const CarTableContainer = () => {
  const {
    cars,
    editCarId,
    editCar,
    deleteCar,
    saveCar,
    cancelCar,
    updateSortField,
  } = useCarToolStoreContext();

  return (
    <CarTable
      cars={cars}
      editCarId={editCarId}
      onEditCar={editCar}
      onDeleteCar={deleteCar}
      onSaveCar={saveCar}
      onCancelCar={cancelCar}
      onUpdateSortField={updateSortField}
    />
  );
};
