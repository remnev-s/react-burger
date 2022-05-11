import React from 'react';
import doneImage from '../../images/done.svg';
import styles from './OrderDetails.module.css';

export function OrderDetails() {
  return (
    <div className={` ${styles.details} pt-30 pr-25 pb-30 pl-25 `}>
      <h2
        className={`${styles.details__list} text text_type_digits-large pb-8`}
      >
        034536
      </h2>
      <p className='styles.test text text_type_main-medium  pb-15'>
        идентификатор заказа
      </p>
      <img className='pb-15' src={doneImage} alt='done icon' />
      <p className='text text_type_main-default pb-2'>
        Ваш заказ начали готовить
      </p>
      <p className='text text_type_main-default text_color_inactive'>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
