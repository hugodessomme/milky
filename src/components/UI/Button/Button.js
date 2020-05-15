import React from 'react';
import css from './Button.module.css';

const button = ({ children, onClick }) => (
  <button
  className={css.btn}
    onClick={onClick}>
      {children}
  </button>
);

export default button;