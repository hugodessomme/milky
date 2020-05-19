import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskAdd, taskDone, taskDelete } from '../../store/actions/task';
import Tasks from '../../components/Tasks/Tasks';
import Button from '../../components/UI/Button/Button';

class TasksManager extends Component {
  // Will be removed, just for test purpose
  generateRandomTask = () => {
    const tasks = ['Wait and see', 'Go somewhere', 'Speak with someone', 'I don\'t know Rick'];
    const categories = ['food', 'boring', 'party'];
    
    return {
      id: Date.now(),
      label: tasks[Math.floor(Math.random() * tasks.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      date: Date.now(),
      done: false
    };
  };

  render() {
    const { tasks, onAdd, onDone, onDelete } = this.props;
    
    return (
      <div>
        <Button onClick={() => onAdd(this.generateRandomTask())}>Generate random task</Button>
        <Tasks items={tasks} onDone={onDone} onDelete={onDelete} />
      </div>
    );
  }
}

const mapStateToProps = ({ task }) => {
  return {
    tasks: task.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: task => dispatch(taskAdd(task)),
    onDone: id => dispatch(taskDone(id)),
    onDelete: id => dispatch(taskDelete(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksManager);