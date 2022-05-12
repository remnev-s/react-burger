import React from 'react';
import { modalPropType } from '../../utils/prop-types.js';
import styles from './ModalOverlay.module.css';

export function ModalOverlay({ onClick }) {
  return <div className={styles.modalOverlay} onClick={onClick}></div>;
}
