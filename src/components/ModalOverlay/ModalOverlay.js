import React from 'react';
import PropTypes from 'prop-types';
import { modalPropType } from '../../utils/prop-types.js';
import styles from './ModalOverlay.module.css';

export function ModalOverlay({ onClick }) {
  return <div className={styles.modalOverlay} onClick={onClick}></div>;
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};
