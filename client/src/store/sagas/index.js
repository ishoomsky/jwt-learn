import { all } from "redux-saga/effects";
import { authWatcher } from "./authSaga";
import { userListWatcher } from "./userListSaga";

export default function* rootWatcher() {
  yield all([authWatcher(), userListWatcher()]);
}
