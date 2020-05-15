import React from 'react';
import css from './Grid.module.css';

export const Container = ({ children }) => <div className={css.container}>{children}</div>
export const Row = ({ children }) => <div className={css.row}>{children}</div>;
export const Col = ({ children }) => <div className={css.col}>{children}</div>;