import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from './types';

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = () => {
  return {
    type: AUTH_SUCCESS
  };
};

export const authFail = error => {
  return {
    type: AUTH_FAIL,
    error
  };
};

export const auth = () => {
  return dispatch => {
    const isSuccess = Math.round(Math.random() * 10) > 3;

    dispatch(authStart());

    // Fake request @todo
    setTimeout(() => {
      if (isSuccess) {
        dispatch(authSuccess())
      } else {
        dispatch(authFail('Oops, I did it again :('));
      }
    }, 800);
  };
};