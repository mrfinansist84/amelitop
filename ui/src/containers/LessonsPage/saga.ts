import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllLessonsSuccess, getAllLessonsError } from './actions';
import { GET_ALL_LESSONS_REQUEST } from './constants';
import LessonsService from './service';
import { type ILesson } from '~/global/types';

export function* getLessonsListSaga() {
  try {
    const data: ILesson[] = yield call(LessonsService.getLessons);
    yield put(getAllLessonsSuccess(data));
  } catch (e) {
    yield put(getAllLessonsError(e));
  }
}

export function* lessonsSagaWatcher() {
  yield takeLatest(GET_ALL_LESSONS_REQUEST, getLessonsListSaga);
}
