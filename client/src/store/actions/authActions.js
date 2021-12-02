import { AUTH_SET, USER_SET, LOGIN, REGISTRATION, LOGOUT, CHECK_AUTH, AUTH_LOADING_SET } from "./actionTypes";

//sync actions
export const authSet = (payload) => ({ type: AUTH_SET, payload });
export const userSet = (payload) => ({ type: USER_SET, payload });
export const authLoadingSet = (payload) => ({ type: AUTH_LOADING_SET, payload });

//async actions (sagas)
export const login = (payload) => ({ type: LOGIN, payload });
export const registration = (payload) => ({ type: REGISTRATION, payload });
export const logout = () => ({ type: LOGOUT });
export const checkAuth = () => ({ type: CHECK_AUTH });
