import React from 'react';
import styles from './ModalOverlay.module.css';

export function ModalOverlay({ onClick }) {
  return <div className={styles.modalOverlay} onClick={onClick}></div>;
}
