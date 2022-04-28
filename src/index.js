import React from 'react';
import { render } from 'react-dom';
import { AppHeader } from './components/Header/AppHeader.js';
import { Container } from './components/Container/Container.js';
import { BurgerIngredients } from './components/BurgerIngredients/BurgerIngredients.js';
import { BurgerConstructor } from './components/BurgerConstructor/BurgerConstructor.js';
import './index.css';

function App() {
  return (
    <>
      <Container>
        <AppHeader />
        <BurgerIngredients />
        <BurgerConstructor />
      </Container>
    </>
  );
}

render(<App />, document.querySelector('#root'));
