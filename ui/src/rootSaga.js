import { all, fork } from 'redux-saga/effects';
import { adminPageSagaWatcher } from './containers/AdminPage/saga';
import { lessonsSagaWatcher } from './containers/LessonsPage/saga';

const sagas = [adminPageSagaWatcher, lessonsSagaWatcher];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
