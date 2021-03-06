import styles from './IngredientDetails.module.css';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types.js';

export function IngredientDetails({ item }) {
  return (
    <div className={` ${styles.details} pt-10 pb-15 pl-10 pr-10`}>
      <div className={` ${styles.details__inner}`}>
        <img className='pb-4 pt-10' src={item.image_large} />
        <p
          className={` ${styles.details__name} text text_type_main-medium pb-8`}
        >
          {item.name}
        </p>
        <ul className={`${styles.details__list} `}>
          <li className={`${styles.details__list_item} mr-5`}>
            <p className='text text_type_main-default text_color_inactive'>
              Каллории,ккал
            </p>
            <span className='text text_type_digits-default text_color_inactive'>
              {item.calories}
            </span>
          </li>
          <li className={`${styles.details__list_item}`}>
            <p className='text text_type_main-default text_color_inactive'>
              Белки,г
            </p>
            <span className='text text_type_digits-default text_color_inactive'>
              {item.proteins}
            </span>
          </li>
          <li className={`${styles.details__list_item}`}>
            <p className='text text_type_main-default text_color_inactive'>
              Жиры,г
            </p>
            <span className='text text_type_digits-default text_color_inactive'>
              {item.fat}
            </span>
          </li>
          <li className={`${styles.details__list_item}`}>
            <p className='text text_type_main-default text_color_inactive'>
              Углеводы,г
            </p>
            <span className='text text_type_digits-default text_color_inactive'>
              {item.carbohydrates}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  item: ingredientPropType.isRequired,
};
