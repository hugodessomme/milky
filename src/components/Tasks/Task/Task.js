import React from 'react';

const task = ({ id, label, category, date, isDone, onDone, onDelete}) => (
  <tr>
    <td>{isDone ? 'DONE': null} {label}</td>
    <td>{category}</td>
    <td>{date}</td>
    <td>
      <button type="button" onClick={() => onDone(id)}>Done</button>
      <button type="button" onClick={() => onDelete(id)}>Delete</button>
    </td>
  </tr>
);

export default task;