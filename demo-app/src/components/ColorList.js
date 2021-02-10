import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ColorsPropType } from '../prop-types/colors';

export const ColorList = ({
  colors,
  isLoading,
  onDeleteColor: deleteColor,
  onRefreshColors: refreshColors,
}) => {
  useEffect(
    () => {
      refreshColors();
    },
    [] /* run this on the initial load only */,
  );

  return (
    <>
      {isLoading && <div>Loading...</div>}
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
    </>
  );
};

ColorList.defaultProps = {
  colors: [],
};

ColorList.propTypes = {
  colors: ColorsPropType,
  onDeleteColor: PropTypes.func.isRequired,
};
