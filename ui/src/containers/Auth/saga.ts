import { takeLatest, call, put, select, take, race, delay } from 'redux-saga/effects';

import {
  getAccessTokenSuccess,
  getAccessTokenError,
  refreshTokenSuccess,
  refreshTokenError,
  toggleBannerAction,
  pollTokenStart
} from './actions';
import { GET_ACCESS_TOKEN_REQUEST, POLL_TOKEN_START, POLL_TOKEN_STOP, REFRESH_TOKEN_REQUEST } from './constants';
import AuthService from './service';
import { type IRootReducer } from '~/rootReducer';
import { type AuthParams } from '~/global/types';

export function* getAccessTokenSaga(action: any) {
  try {
    const response: AuthParams = yield call(AuthService.getAccessToken, action.payload);
    yield put(getAccessTokenSuccess(response));
    yield put(pollTokenStart());
    yield localStorage.setItem('auth', JSON.stringify({ ...response, date: Date.now() }));
  } catch (e) {
    yield put(getAccessTokenError(e));
    yield put(toggleBannerAction(true, 'ERROR', 'Auth failed'));
  }
}

export function* refreshTokenSaga() {
  try {
    const { refreshToken } = yield select((state: IRootReducer) => state.authenticatedReducer);
    const response: AuthParams = yield call(AuthService.refreshToken, refreshToken);
    yield put(refreshTokenSuccess(response));
    yield localStorage.setItem('auth', JSON.stringify({ ...response, date: Date.now() }));
  } catch (e) {
    yield put(refreshTokenError(e));
    yield put(toggleBannerAction(true, 'ERROR', 'Failed to refresh token'));
  }
}

export function* pollCurrentAction() {
  while (true) {
    yield delay(270000); // 4,5min
    yield call(refreshTokenSaga);
  }
}

export function* tokenRefreshWatcherSaga() {
  while (true) {
    yield take(POLL_TOKEN_START);
    yield race([call(pollCurrentAction), take(POLL_TOKEN_STOP)]);
  }
}

export function* authSagaWatcher() {
  yield takeLatest(GET_ACCESS_TOKEN_REQUEST, getAccessTokenSaga);
  yield takeLatest(REFRESH_TOKEN_REQUEST, refreshTokenSaga);
}
