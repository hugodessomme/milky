import React from 'react';
import css from './Tile.module.css';

const tile = ({ children }) => <div className={css.tile}>{children}</div>;

export default tile;