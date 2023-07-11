import { call, put, takeLatest } from 'redux-saga/effects';
import { saveLessonSuccess, saveLessonError } from './actions';
import { SAVE_LESSON_REQUEST } from './constants';
import LessonCreatorService from './service';
import { type Lesson } from '../../global/types';

export function* saveLessonSaga(action: any) {
  try {
    const data: Lesson[] = yield call(LessonCreatorService.saveLesson, action.payload);
    yield put(saveLessonSuccess(data));
  } catch (e) {
    yield put(saveLessonError(e));
  }
}

export function* lessonCreatorSagaWatcher() {
  yield takeLatest(SAVE_LESSON_REQUEST, saveLessonSaga);
}
