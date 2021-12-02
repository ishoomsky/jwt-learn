import { put, call, takeLatest, all } from "redux-saga/effects";
import { USER_LIST_FETCH } from "../actions/actionTypes";
import { userListSet, userListLoadingSet } from "../actions/userListActions";
import UserService from "../../services/UserService";

function* userListFetchWorker() {
    yield put(userListLoadingSet(true));

    try {
        const response = yield call(UserService.fetchUsers);
        yield put(userListSet(response.data));
    } catch(e) {
        // console.log(e.response?.data?.message);
    } finally {
        yield put(userListLoadingSet(false));
    }
}

export function* userListWatcher() {
  yield all([
    takeLatest(USER_LIST_FETCH, userListFetchWorker),
  ]);
}
