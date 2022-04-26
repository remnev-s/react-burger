import React from 'react';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './AppHeader.module.css';

export function AppHeader() {
  return (
    <header className={styles.header} mt-5>
      <ul className={`${styles.menu} text text_type_main-default`}>
        <li className={`${styles.item} m-5`}>
          <div className='mr-2'>
            <BurgerIcon type='primary' />
          </div>
          Конструктор
        </li>

        <li className={`${styles.item} m-5`}>
          <div className='mr-2'>
            <ListIcon type='primary' />
          </div>
          Лента заказов
        </li>
      </ul>

      <Logo />

      <div className={`${styles.accaunt} text text_type_main-default m-5`}>
        <div className='mr-2'>
          <ProfileIcon type='primary' />
        </div>
        Личный кабинет
      </div>
    </header>
  );
}
