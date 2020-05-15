import React from 'react';
import image from '../../assets/img/avatar.jpg';
import css from './Avatar.module.css';

const avatar = props => (
  <img src={image} alt="" width="120" height="120" className={css.avatar} />
);

export default avatar;