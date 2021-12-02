import { USER_LIST_SET, USER_LIST_FETCH, USER_LIST_LOADING_SET } from "./actionTypes";

export const userListSet = (payload) => ({ type: USER_LIST_SET, payload });
export const userListFetch = () => ({ type: USER_LIST_FETCH });
export const userListLoadingSet = (payload) => ({ type: USER_LIST_LOADING_SET });
