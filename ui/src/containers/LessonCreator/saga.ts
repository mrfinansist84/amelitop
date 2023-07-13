import { call, put, takeLatest, select } from 'redux-saga/effects';
import { saveLessonSuccess, saveLessonError } from './actions';
import { SAVE_LESSON_REQUEST } from './constants';
import LessonCreatorService from './service';
import { type ILesson } from '../../global/types';
import { type IRootReducer } from '../../rootReducer';

export function* saveLessonSaga(action: any) {
  try {
    const { accessToken } = yield select((state: IRootReducer) => state.authenticatedReducer);
    const data: ILesson[] = yield call(LessonCreatorService.saveLesson, action.payload, accessToken);
    yield put(saveLessonSuccess(data));
  } catch (e) {
    yield put(saveLessonError(e));
  }
}

export function* lessonCreatorSagaWatcher() {
  yield takeLatest(SAVE_LESSON_REQUEST, saveLessonSaga);
}
