import { TASK_ADD, TASK_DELETE, TASK_DONE } from './types';

export const taskAdd = task => {
  return {
    type: TASK_ADD,
    task
  };
};

export const taskDelete = id => {
  return {
    type: TASK_DELETE,
    id
  };
};

export const taskDone = id => {
  return {
    type: TASK_DONE,
    id
  };
};