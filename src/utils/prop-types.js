import PropTypes from 'prop-types';

export const ingredientPropType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});
