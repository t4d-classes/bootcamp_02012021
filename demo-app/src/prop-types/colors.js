import PropTypes from 'prop-types';

export const ColorPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  hexcode: PropTypes.string.isRequired,
});

export const ColorsPropType = PropTypes.arrayOf(ColorPropType);