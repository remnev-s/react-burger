import React, { useState, useEffect } from 'react';

import { Container } from '../Container/Container.js';
import { AppHeader } from '../Header/AppHeader.js';
import { BurgerIngredients } from '../BurgerIngredients/BurgerIngredients.js';
import { BurgerConstructor } from '../BurgerConstructor/BurgerConstructor.js';

import { Modal } from '../Modal/Modal.js';
import { OrderDetails } from '../OrderDetails/OrderDetails.js';

import { api, getResponseData } from '../../utils/api.js';

export function App() {
  const [ingredients, setIngredients] = useState([]);
  const [orderDetails, setOrderDetails] = useState(false);
  useEffect(() => {
    const getIngredients = () => {
      fetch(`${api.baseUrl}/ingredients`, {
        headers: api.headers,
      })
        .then(getResponseData)
        .then((res) => setIngredients(res.data))
        .catch((err) => {
          console.log(err);
        });
    };
    getIngredients();
  }, []);

  const handleOrderClick = () => {
    setOrderDetails(true);
  };

  const closeOrderPopup = () => {
    setOrderDetails(false);
  };
  return (
    <>
      <Container>
        <AppHeader />
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor
          ingredients={ingredients}
          onRequestOpen={handleOrderClick}
        />
      </Container>

      {orderDetails && (
        <Modal onRequestClose={closeOrderPopup}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}
