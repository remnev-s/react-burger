import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay.js';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Modal.module.css';

export function Modal({ children, onRequestClose, keyDown }) {
  useEffect(() => {
    document.addEventListener('keydown', keyDown);
    return () => {
      document.removeEventListener('keydown', keyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <button className={styles.modal__closeBtn} type='button'>
          <CloseIcon type='primary' onClick={onRequestClose} />
        </button>
        {children}
      </div>
      <ModalOverlay onClick={onRequestClose} />
    </>,
    document.querySelector('#modal')
  );
}
