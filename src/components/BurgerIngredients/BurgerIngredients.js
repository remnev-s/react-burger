import React, { useState } from 'react';
import {
  Tab,
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { dataSet } from '../../utils/data.js';
import styles from './BurgerIngredients.module.css';

const buns = dataSet.filter((i) => i.type === 'bun');
const sauce = dataSet.filter((i) => i.type === 'sauce');
const main = dataSet.filter((i) => i.type === 'main');

export function BurgerIngredients() {
  const [current, setCurrent] = useState('one');
  return (
    <>
      <h1 className='text text_type_main-large mt-10 mb-5 ml-5'>
        Соберите бургер
      </h1>

      <section className={`${styles.ingredients} pl-5`}>
        <div className={styles.tabs}>
          <Tab value='one' active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value='two' active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value='three' active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>

        <div className={styles.categories}>
          <h2 className='text text_type_main-medium mt-10'> Булки </h2>

          <div className={`${styles.category} mt-6`}>
            {buns.map((data) => (
              <React.Fragment key={data._id}>
                <div className={`${styles.card} mr-6 mb-6`}>
                  <Counter count={1} size='default' />
                  <img className='image' src={data.image} alt='buns' />
                  <div
                    className={`${styles.price} text text_type_digits-default pt-1 pb-1 `}
                  >
                    20
                    <span className='ml-2'>
                      <CurrencyIcon type='primary' />
                    </span>
                  </div>
                  <h3
                    className={`${styles.card_name} text text_type_main-default`}
                  >
                    {data.name}
                  </h3>
                </div>
              </React.Fragment>
            ))}
          </div>

          <h2 className='text text_type_main-medium mt-10'> Соусы </h2>
          <div className={`${styles.category} mt-6`}>
            {sauce.map((data) => (
              <React.Fragment key={data._id}>
                <div className={`${styles.card} mr-6 mb-6`}>
                  <Counter count={1} size='default' />
                  <img className='image' src={data.image} alt='buns' />
                  <div
                    className={`${styles.price} text text_type_digits-default pt-1 pb-1 `}
                  >
                    20
                    <span className='ml-2'>
                      <CurrencyIcon type='primary' />
                    </span>
                  </div>
                  <h3
                    className={`${styles.card_name} text text_type_main-default`}
                  >
                    {data.name}
                  </h3>
                </div>
              </React.Fragment>
            ))}
          </div>
          <h2 className='text text_type_main-medium mt-10'> Начинки </h2>
          <div className={`${styles.category} mt-6`}>
            {main.map((data) => (
              <React.Fragment key={data._id}>
                <div className={`${styles.card} mr-6 mb-6`}>
                  <Counter count={1} size='default' />
                  <img className='image' src={data.image} alt='buns' />
                  <div
                    className={`${styles.price} text text_type_digits-default pt-1 pb-1 `}
                  >
                    20
                    <span className='ml-2'>
                      <CurrencyIcon type='primary' />
                    </span>
                  </div>
                  <h3
                    className={`${styles.card_name} text text_type_main-default`}
                  >
                    {data.name}
                  </h3>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
