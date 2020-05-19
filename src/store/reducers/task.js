import { TASK_ADD, TASK_DELETE, TASK_DONE} from '../actions/types';

const initialState = {
  tasks: [
    { id: 1, label: 'Drink coffee', category: 'fun', date: '22/09', done: false },
    { id: 2, label: 'Do sport', category: 'health', date: '07/01', done: false }
  ]
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case TASK_ADD: {
      return {
        ...state,
        tasks: state.tasks.concat(action.task)
      };
    }

    case TASK_DELETE: {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id)
      };
    }

    case TASK_DONE: {
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.id ? { ...task, done: !task.done } : task)
      };
    }
    
    default: 
      return state;
  };
};

export default reducer;