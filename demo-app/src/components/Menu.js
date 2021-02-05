import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/color-tool">Color Tool</Link>
        </li>
        <li>Add Color</li>
        <li>
          <Link to="/car-tool">Car Tool</Link>
        </li>
        <li>Add Car</li>
      </ul>
    </nav>
  );
};
