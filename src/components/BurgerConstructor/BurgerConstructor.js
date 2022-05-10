import React from 'react';

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { ingredientPropType } from '../../utils/prop-types.js';
import styles from './BurgerConstructor.module.css';

export function BurgerConstructor({ ingredients }) {
  return (
    <section className={` ${styles.constructor} pr-5 `}>
      <div className={`${styles.top_card}`}>
        {ingredients
          .filter((data) => data.name === 'Краторная булка N-200i')
          .map((data) => (
            <ConstructorElement
              type='top'
              isLocked={true}
              text='Краторная булка N-200i (верх)'
              price={data.price}
              thumbnail={data.image}
            />
          ))}
      </div>
      <ul className={`${styles.cards__list} mb-5`}>
        {ingredients
          .filter((data) => data.type !== 'bun')
          .map((data) => (
            <li className={`${styles.cards__list_item} `} key={data._id}>
              <DragIcon type='primary' />
              <ConstructorElement
                text={data.name}
                price={data.price}
                thumbnail={data.image}
              />
            </li>
          ))}
      </ul>
      <div className={`${styles.botton_card}`}>
        {ingredients
          .filter((data) => data.name === 'Краторная булка N-200i')
          .map((data) => (
            <ConstructorElement
              type='bottom'
              isLocked={true}
              text='Краторная булка N-200i (низ)'
              price={data.price}
              thumbnail={data.image}
            />
          ))}
      </div>

      <div className={`${styles.order}  mr-5`}>
        <div className={`${styles.price} mr-10`}>
          <p
            className={`${styles.price_number}text text_type_digits-medium mr-2`}
          >
            610
          </p>
          <CurrencyIcon type='primary' />
        </div>
        <Button type='primary' size='medium'>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}
