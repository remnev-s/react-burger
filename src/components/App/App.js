import React from 'react';

import { Container } from '../Container/Container.js';
import { AppHeader } from '../Header/AppHeader.js';
import { BurgerIngredients } from '../BurgerIngredients/BurgerIngredients.js';
import { BurgerConstructor } from '../BurgerConstructor/BurgerConstructor.js';

export function App() {
  return (
    <Container>
      <AppHeader />
      <BurgerIngredients />
      <BurgerConstructor />
    </Container>
  );
}
