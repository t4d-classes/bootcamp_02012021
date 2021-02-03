import { useForm } from '../hooks/useForm';

export const CarEditRow = ({ car, onSaveCar, onCancelCar: cancelCar }) => {
  const [carForm, change] = useForm({ ...car });

  const saveCar = () => {
    onSaveCar({
      ...carForm,
      id: car.id,
    });
  };

  return (
    <tr>
      <td>{car.id}</td>
      <td>
        <input type="text" name="make" value={carForm.make} onChange={change} />
      </td>
      <td>
        <input
          type="text"
          name="model"
          value={carForm.model}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="text"
          data-type="number"
          name="year"
          value={carForm.year}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="text"
          name="color"
          value={carForm.color}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="text"
          data-type="number"
          name="price"
          value={carForm.price}
          onChange={change}
        />
      </td>
      <td>
        <button type="button" onClick={saveCar}>
          Save
        </button>
        <button type="button" onClick={cancelCar}>
          Cancel
        </button>
      </td>
    </tr>
  );
};
