import { USER_LIST_SET, USER_LIST_LOADING_SET } from "../actions/actionTypes";

const initState = {
  userList: [],
  isLoading: false,
};

const userListSet = (state, action) => {
  const updater = {
    userList: action.payload,
  };
  return { ...state, ...updater };
};

const userListLoadingSet = (state, action) => {
  const updater = {
    isLoading: action.payload,
  };
  return { ...state, ...updater };
};

export const userListReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_LIST_SET: {
      return userListSet(state, action);
    }
    case USER_LIST_LOADING_SET: {
      return userListLoadingSet(state, action);
    }
    default:
      return state;
  }
};
