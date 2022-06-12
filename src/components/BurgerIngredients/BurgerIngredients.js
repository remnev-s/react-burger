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
  // const [current, setCurrent] = useState('one');
  const [current, setCurrent] = useState('bun');

  const [bunRef, inViewBun] = useInView({ threshold: 1 });
  const [sauceRef, inViewSauce] = useInView({ threshold: 0.5 });
  const [mainRef, inViewMain] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewBun) {
      setCurrent('bun');
    } else if (inViewSauce) {
      setCurrent('sauce');
    } else if (inViewMain) {
      setCurrent('main');
    }
  }, [inViewBun, inViewSauce, inViewMain]);

  const onTabClick = (tab) => {
    console.log('click');
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <h1
        className={`${styles.title} text text_type_main-large mt-10 mb-5 ml-5`}
      >
        Соберите бургер
      </h1>

      <section className={`${styles.ingredients} pl-5`}>
        <div className={`${styles.tabs} mb-10`}>
          <a className={`${styles.citing}`} href="#bun">
            <Tab
              value="bun"
              active={current === 'bun'}
              onClick={onTabClick}
              inViewBun={inViewBun}
            >
              Булки
            </Tab>
          </a>

          <a className={`${styles.citing}`} href="#sauce">
            <Tab
              value="sauce"
              active={current === 'sauce'}
              onClick={onTabClick}
              inViewSauce={inViewSauce}
            >
              Соусы
            </Tab>
          </a>
          <a className={`${styles.citing}`} href="#main">
            <Tab
              value="main"
              active={current === 'main'}
              onClick={onTabClick}
              inViewMain={inViewMain}
            >
              Начинки
            </Tab>
          </a>
        </div>

        <div className={styles.categories}>
          <h2 className="text text_type_main-medium "> Булки </h2>

          <a name="bun">
            <div className={`${styles.category} mt-6`}>
              {ingredients
                .filter((data) => data.type === 'bun')
                .map((data) => (
                  <div
                    className={`${styles.card} mr-6 mb-6`}
                    key={data._id}
                    onClick={() => ingredientClick(data)}
                    ref={bunRef}
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
          </a>

          <h2 className="text text_type_main-medium mt-10"> Соусы </h2>
          <a name="sauce">
            <div className={`${styles.category} mt-6`}>
              {ingredients
                .filter((data) => data.type === 'sauce')
                .map((data) => (
                  <div
                    className={`${styles.card} mr-6 mb-6`}
                    key={data._id}
                    onClick={() => ingredientClick(data)}
                    ref={sauceRef}
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
          </a>

          <h2 className="text text_type_main-medium mt-10"> Начинки </h2>
          <a name="main">
            <div className={`${styles.category} mt-6`}>
              {ingredients
                .filter((data) => data.type === 'main')
                .map((data) => (
                  <div
                    className={`${styles.card} mr-6 mb-6`}
                    key={data._id}
                    onClick={() => ingredientClick(data)}
                    ref={mainRef}
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
          </a>
        </div>
      </section>
    </>
  );
}
BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
  ingredientClick: PropTypes.func.isRequired,
};
