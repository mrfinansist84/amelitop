import { takeLatest, call, put, select } from 'redux-saga/effects';
import { type User } from '../../global/types';

import { updateUserList, toggleBannerAction } from './actions';
import {
  GET_ALL_USERS_REQUEST,
  CREATE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  UPDATE_STATUS_REQUEST,
  DELETE_USER_REQUEST
} from './constants';
import AdminPageService from './service';
import { type IRootReducer } from '../../rootReducer';

const getCurrentList = (userList: any[], updatedUser: User, isDelete: boolean) => {
  const userIndex = userList.findIndex((item: User) => item.id === updatedUser.id);
  const list = structuredClone(userList);
  if (isDelete) {
    list.splice(userIndex, 1);
    return list;
  }
  list.splice(userIndex, 1, updatedUser);
  return list;
};

export function* getUserListSaga() {
  try {
    const response: User[] = yield call(AdminPageService.getUserListData);
    yield console.log(response);
    yield put(updateUserList(response));
  } catch (e) {
    yield put(toggleBannerAction(true, 'ERROR', 'Failed to get list'));
  }
}

export function* createProfileSaga(action: any) {
  try {
    const response: User = yield call(AdminPageService.createProfile, action.payload);
    const { userList } = yield select((state: IRootReducer) => state.adminPageReducer);
    yield put(updateUserList([...userList, response]));
    yield put(toggleBannerAction(true, 'SUCCESS', 'Succesful created user'));
  } catch (e) {
    yield put(toggleBannerAction(true, 'ERROR', 'Failed to create user'));
  }
}

export function* updateProfileSaga(action: any) {
  try {
    const response: User = yield call(AdminPageService.updateProfile, action.payload);
    const { userList } = yield select((state: IRootReducer) => state.adminPageReducer);
    yield put(updateUserList(getCurrentList(userList, response, false)));
    yield put(toggleBannerAction(true, 'SUCCESS', 'Succesful updated profile'));
  } catch (e) {
    yield put(toggleBannerAction(true, 'ERROR', 'Failed to update profile'));
  }
}

export function* updateUserStatusSaga(action: any) {
  try {
    const response: User = yield call(AdminPageService.updateStatus, action.status, action.userId);
    const { userList } = yield select((state: IRootReducer) => state.adminPageReducer);
    yield put(updateUserList(getCurrentList(userList, response, false)));
    yield put(toggleBannerAction(true, 'SUCCESS', 'Succesful updated users status'));
  } catch (e) {
    yield put(toggleBannerAction(true, 'ERROR', 'Failed to update users status'));
  }
}

export function* deleteUserSaga(action: any) {
  try {
    yield call(AdminPageService.deleteUser, action.payload.id);
    const { userList } = yield select((state: IRootReducer) => state.adminPageReducer);
    yield put(updateUserList(getCurrentList(userList, action.payload, true)));
    yield put(toggleBannerAction(true, 'SUCCESS', 'Succesful deleted user'));
  } catch (e) {
    yield put(toggleBannerAction(true, 'ERROR', 'Failed to deleted user'));
  }
}

export function* adminPageSagaWatcher() {
  yield takeLatest(GET_ALL_USERS_REQUEST, getUserListSaga);
  yield takeLatest(CREATE_USER_REQUEST, createProfileSaga);
  yield takeLatest(UPDATE_USER_REQUEST, updateProfileSaga);
  yield takeLatest(DELETE_USER_REQUEST, deleteUserSaga);
  yield takeLatest(UPDATE_STATUS_REQUEST, updateUserStatusSaga);
}
