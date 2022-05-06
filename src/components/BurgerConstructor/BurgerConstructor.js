import React from 'react';

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { dataSet } from '../../utils/data.js';
import { ingredientPropType } from '../../utils/prop-types.js';
import styles from './BurgerConstructor.module.css';

const ingredients = dataSet.filter((i) => i.type !== 'bun');

export function BurgerConstructor() {
  return (
    <section className={` ${styles.constructor} pr-5 `}>
      <div className={`${styles.top_card}`}>
        <ConstructorElement
          type='top'
          isLocked={true}
          text='Краторная булка N-200i (верх)'
          price={200}
          thumbnail={dataSet[0].image}
        />
      </div>
      <ul className={`${styles.cards__list} mb-5`}>
        {ingredients.map((item) => (
          <li className={`${styles.cards__list_item} `} key={item._id}>
            <DragIcon type='primary' />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </li>
        ))}
      </ul>
      <div className={`${styles.botton_card}`}>
        <ConstructorElement
          type='bottom'
          isLocked={true}
          text='Краторная булка N-200i (низ)'
          price={200}
          thumbnail={dataSet[0].image}
        />
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
