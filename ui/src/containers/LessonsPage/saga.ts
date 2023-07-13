import { call, put, takeLatest, select } from 'redux-saga/effects';
import { getAllLessonsSuccess, getAllLessonsError } from './actions';
import { GET_ALL_LESSONS_REQUEST } from './constants';
import LessonsService from './service';
import { type ILesson } from '../../global/types';
import { type IRootReducer } from '../../rootReducer';

export function* getLessonsListSaga() {
  try {
    const { accessToken } = yield select((state: IRootReducer) => state.authenticatedReducer);
    const data: ILesson[] = yield call(LessonsService.getLessons, accessToken);
    yield put(getAllLessonsSuccess(data));
  } catch (e) {
    yield put(getAllLessonsError(e));
  }
}

export function* lessonsSagaWatcher() {
  yield takeLatest(GET_ALL_LESSONS_REQUEST, getLessonsListSaga);
}
