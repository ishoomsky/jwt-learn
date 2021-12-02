import { AUTH_SET, USER_SET, AUTH_LOADING_SET } from "../actions/actionTypes";

const initState = {
  isAuth: false,
  user: {},
  isLoading: false,
};

const authSet = (state, action) => {
  const updater = {
    isAuth: action.payload,
  };
  return { ...state, ...updater };
};

const userSet = (state, action) => {
  const updater = {
    user: action.payload,
  };
  return { ...state, ...updater };
};

const authLoadingSet = (state, action) => {
  const updater = {
    isLoading: action.payload,
  };
  return { ...state, ...updater };
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_SET: {
      return authSet(state, action);
    }
    case USER_SET: {
      return userSet(state, action);
    }
    case AUTH_LOADING_SET: {
      return authLoadingSet(state, action);
    }
    default:
      return state;
  }
};
