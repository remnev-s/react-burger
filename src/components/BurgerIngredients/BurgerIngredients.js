import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import {
  Tab,
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { ingredientPropType } from '../../utils/prop-types.js';
import styles from './BurgerIngredients.module.css';

export function BurgerIngredients({ ingredients, ingredientClick }) {
  const [current, setCurrent] = useState('one');
  return (
    <>
      <h1
        className={`${styles.title} text text_type_main-large mt-10 mb-5 ml-5`}
      >
        Соберите бургер
      </h1>

      <section className={`${styles.ingredients} pl-5`}>
        <div className={`${styles.tabs} mb-10`}>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>

        <div className={styles.categories}>
          <h2 className="text text_type_main-medium "> Булки </h2>

          <div className={`${styles.category} mt-6`}>
            {ingredients
              .filter((data) => data.type === 'bun')
              .map((data) => (
                <div
                  className={`${styles.card} mr-6 mb-6`}
                  key={data._id}
                  onClick={() => ingredientClick(data)}
                >
                  <Counter count={1} size="default" />
                  <img className="image" src={data.image} alt="buns" />
                  <div
                    className={`${styles.price} text text_type_digits-default pt-1 pb-1 `}
                  >
                    20
                    <span className="ml-2">
                      <CurrencyIcon type="primary" />
                    </span>
                  </div>
                  <h3
                    className={`${styles.card_name} text text_type_main-default`}
                  >
                    {data.name}
                  </h3>
                </div>
              ))}
          </div>

          <h2 className="text text_type_main-medium mt-10"> Соусы </h2>
          <div className={`${styles.category} mt-6`}>
            {ingredients
              .filter((data) => data.type === 'sauce')
              .map((data) => (
                <div
                  className={`${styles.card} mr-6 mb-6`}
                  key={data._id}
                  onClick={() => ingredientClick(data)}
                >
                  <Counter count={1} size="default" />
                  <img className="image" src={data.image} alt="sauce" />
                  <div
                    className={`${styles.price} text text_type_digits-default pt-1 pb-1 `}
                  >
                    20
                    <span className="ml-2">
                      <CurrencyIcon type="primary" />
                    </span>
                  </div>
                  <h3
                    className={`${styles.card_name} text text_type_main-default`}
                  >
                    {data.name}
                  </h3>
                </div>
              ))}
          </div>
          <h2 className="text text_type_main-medium mt-10"> Начинки </h2>
          <div className={`${styles.category} mt-6`}>
            {ingredients
              .filter((data) => data.type === 'main')
              .map((data) => (
                <div
                  className={`${styles.card} mr-6 mb-6`}
                  key={data._id}
                  onClick={() => ingredientClick(data)}
                >
                  <Counter count={1} size="default" />
                  <img className="image" src={data.image} alt="main" />
                  <div
                    className={`${styles.price} text text_type_digits-default pt-1 pb-1 `}
                  >
                    20
                    <span className="ml-2">
                      <CurrencyIcon type="primary" />
                    </span>
                  </div>
                  <h3
                    className={`${styles.card_name} text text_type_main-default`}
                  >
                    {data.name}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
  ingredientClick: PropTypes.func.isRequired,
};
