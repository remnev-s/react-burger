import React from 'react';
import styles from './container.css';

export function Container(props) {
  return <div className='container'> {props.children} </div>;
}
