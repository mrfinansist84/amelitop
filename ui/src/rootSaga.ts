import { all, fork } from 'redux-saga/effects';
import { adminPageSagaWatcher } from './containers/AdminPage/saga';
import { authSagaWatcher, tokenRefreshWatcherSaga } from './containers/Auth/saga';
import { lessonCreatorSagaWatcher } from './containers/LessonCreator/saga';
import { lessonsSagaWatcher } from './containers/LessonsPage/saga';

const sagas = [
  adminPageSagaWatcher,
  authSagaWatcher,
  lessonCreatorSagaWatcher,
  lessonsSagaWatcher,
  tokenRefreshWatcherSaga
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
