import React from 'react';
import css from './Input.module.css';

const input = props => {
  const {
    id,
    value,
    type,
    placeholder,
    label,
    onChange
  } = props;
  const inputProps = {
    id,
    value,
    type,
    placeholder
  };
  const cssClasses = [css.field];

  return (
    <div className={css.group}>
      {label && <label htmlFor={inputProps.id} className={css.label}>{label}</label>}
      <input 
          {...inputProps}
          name={inputProps.id}
          className={cssClasses.join(' ')}
          onChange={onChange} />  
    </div>
  );
};

export default input;

