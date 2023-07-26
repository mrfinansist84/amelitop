import { call, put, takeLatest } from 'redux-saga/effects';
import * as A from './actions';
import * as C from './constants';
import LessonsService from './service';
import { type ILesson } from '~/global/types';

export function* getLessonsListSaga() {
  try {
    const data: ILesson[] = yield call(LessonsService.getLessons);
    yield put(A.getAllLessonsSuccess(data));
  } catch (e) {
    yield put(A.getAllLessonsError(e));
  }
}

export function* deleteLessonSaga(action: any) {
  try {
    yield call(LessonsService.deleteLesson, action.id);
    yield put(A.deleteLessonSuccess(action.id));
  } catch (e) {
    yield put(A.deleteLessonError(e));
  }
}

export function* lessonsSagaWatcher() {
  yield takeLatest(C.GET_ALL_LESSONS_REQUEST, getLessonsListSaga);
  yield takeLatest(C.DELETE_LESSON_REQUEST, deleteLessonSaga);
}
