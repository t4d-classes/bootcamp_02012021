import PropTypes from 'prop-types';

import { ColorsPropType } from '../prop-types/colors';

export const ColorList = ({ colors, onDeleteColor: deleteColor }) => {
  return (
    <ul>
      {!colors.length && <li>There are no colors.</li>}
      {colors.map(color => (
        <li key={color.id}>
          {color.name}
          <button type="button" onClick={() => deleteColor(color.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

ColorList.defaultProps = {
  colors: [],
};

ColorList.propTypes = {
  colors: ColorsPropType,
  onDeleteColor: PropTypes.func.isRequired,
};
