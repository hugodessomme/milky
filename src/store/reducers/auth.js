import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  isAuthenticated: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true
      };      
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true
      };      
    case AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };      
  
    default:
      return state;
  };
};

export default reducer;