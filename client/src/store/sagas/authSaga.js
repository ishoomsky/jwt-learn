import { put, call, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
  LOGIN,
  REGISTRATION,
  LOGOUT,
  CHECK_AUTH,
} from "../actions/actionTypes";
import AuthService from "../../services/AuthService";
import { authSet, userSet, authLoadingSet } from "../actions/authActions";
import {
  localStorageSet,
  localStorageRemove,
} from "../../services/LocalStorageAPI";

function* loginWorker(action) {
  try {
    const response = yield call(
      AuthService.login,
      action.payload.email,
      action.payload.password
    );
    yield call(console.log, "Server to Client, JWT Token", response);
    yield call(localStorageSet, "token", response.data.accessToken);
    yield put(authSet(true));
    yield put(userSet(response.data.user));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
}

function* registrationWorker(action) {
  try {
    const response = yield call(
      AuthService.registration,
      action.payload.email,
      action.payload.password
    );
    yield call(console.log, response);
    yield call(localStorageSet, "token", response.data.accessToken);
    yield put(authSet(true));
    yield put(userSet(response.data.user));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
}

function* logoutWorker() {
  try {
    yield call(AuthService.logout);
    yield call(localStorageRemove, "token");
    yield put(authSet(false));
    yield put(userSet({}));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
}

function* checkAuthWorker() {
  yield put(authLoadingSet(true));
  try {
    const response = yield call(
      axios.get,
      `http://localhost:5000/api/refresh`,
      { withCredentials: true }
    );
    yield call(localStorageSet, "token", response.data.accessToken);
    yield call(console.log, "auth refresh");
    yield put(authSet(true));
    yield put(userSet(response.data.user));
  } catch (e) {
    console.log(e.response?.data?.message);
  } finally {
    yield put(authLoadingSet(false));
  }
}

export function* authWatcher() {
  yield all([
    takeLatest(LOGIN, loginWorker),
    takeLatest(REGISTRATION, registrationWorker),
    takeLatest(LOGOUT, logoutWorker),
    takeLatest(CHECK_AUTH, checkAuthWorker),
  ]);
}
