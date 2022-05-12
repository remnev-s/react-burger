import styles from './IngredientDetails.module.css';

export function IngredientDetails({ ingredient }) {
  return (
    <div className={` ${styles.details} pt-30 pr-25 pb-30 pl-25 `}>
      <h2
        className={`${styles.details__list} text text_type_digits-large pb-8`}
      >
        Детали ингредиента
      </h2>

      <div className='styles.details__inner'>
        <img className='pr-5 pl-5' src={ingredient.image} />
        <p className='styles.details__name'> {ingredient.name} </p>
        <ul className={styles.details__list}>
          <li className={`${styles.details__list_item}`}>
            <p className='text text_type_main-default text_color_inactive'>
              Каллории, ккал
            </p>
            <span className='text text_type_digits-default text_color_inactive'>
              {ingredient.calories}
            </span>
          </li>
          <li className={`${styles.details__list_item}`}>
            <p className='text text_type_main-default text_color_inactive'>
              Белки, г
            </p>
            <span className='text text_type_digits-default text_color_inactive'>
              {ingredient.proteins}
            </span>
          </li>
          <li className={`${styles.details__list_item}`}>
            <p className='text text_type_main-default text_color_inactive'>
              Жиры, г
            </p>
            <span className='text text_type_digits-default text_color_inactive'>
              {ingredient.fat}
            </span>
          </li>
          <li className={`${styles.details__list_item}`}>
            <p className='text text_type_main-default text_color_inactive'>
              Углеводы, г
            </p>
            <span className='text text_type_digits-default text_color_inactive'>
              {ingredient.carbohydrates}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
