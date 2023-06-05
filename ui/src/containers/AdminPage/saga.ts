import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getAllUsersSuccess,
  getAllUsersError
} from './actions';
import { GET_ALL_USERS_REQUEST } from './constants';
import AdminPageService from './service';

export function* getUserListSaga() {
  try {
    const response: any[] = yield call(AdminPageService.geUserListData)
    yield put(getAllUsersSuccess(response))
  } catch (e) {
    yield put(getAllUsersError(e))
  }
};

export function* adminPageSagaWatcher() {
  yield takeLatest(GET_ALL_USERS_REQUEST, getUserListSaga)
};
