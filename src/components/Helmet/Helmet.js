import React from 'react';
import Avatar from '../Avatar/Avatar';
import css from './Helmet.module.css';

const helmet = props => (
  <div className={css.helmet}>
    <Avatar />

    <div className={css.content}>
      <h1 className={css.title}>Welcome!</h1>
      <h2 className={css.subtitle}>Enjoy our New Todo list manager!</h2>
    </div>
  </div>
);

export default helmet;