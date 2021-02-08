import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/color-list">Color List</Link>
        </li>
        <li>
          <Link to="/add-color">Add Color</Link>
        </li>
        <li>
          <Link to="/car-table">Car Table</Link>
        </li>
        <li>
          <Link to="/add-car">Add Car</Link>
        </li>
      </ul>
    </nav>
  );
};
