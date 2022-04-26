import React from 'react';
import { render } from 'react-dom';
import { AppHeader } from './components/header/header.js';
import { Container } from './components/container/container.js';
import './index.css';

function App() {
  return (
    <>
      <Container>
        <AppHeader />
      </Container>
    </>
  );
}

render(<App />, document.querySelector('#root'));
