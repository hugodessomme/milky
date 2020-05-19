import React from 'react';
import Task from './Task/Task';

const tasks = ({ items, onDone, onDelete }) => {
  const tasks = items.map(task => <Task 
                                    key={task.id} 
                                    id={task.id}
                                    label={task.label} 
                                    category={task.category} 
                                    date={task.date} 
                                    isDone={task.done}
                                    onDone={onDone}
                                    onDelete={onDelete} />);

  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Category</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks}
      </tbody>
    </table>
  );
}

export default tasks;