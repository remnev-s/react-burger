import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Modal.module.css';
import { modalPropType } from '../../utils/prop-types.js';

export function Modal({ children, onRequestClose, keyDown }) {
  useEffect(() => {
    document.addEventListener('keydown', keyDown);
    document.addEventListener('Escape', onRequestClose);
    return () => {
      document.removeEventListener('keydown', keyDown);
      document.removeEventListener('Escape', onRequestClose);
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

Modal.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  keyDown: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
