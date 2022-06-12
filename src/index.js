import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App/App.js';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './services/reducers';

import { compose, createStore } from 'redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
