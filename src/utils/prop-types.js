import PropTypes from 'prop-types';

export const ingredientPropType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
});

export const modalPropType = PropTypes.shape({
  children: PropTypes.element.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onRequestOpen: PropTypes.func.isRequired,
  keyDown: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
});
