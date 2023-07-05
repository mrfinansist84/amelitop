import { all, fork } from 'redux-saga/effects';
import { adminPageSagaWatcher } from './containers/AdminPage/saga';
import { lessonsSagaWatcher } from './containers/LessonsPage/saga';
import { lessonCreatorSagaWatcher } from './containers/LessonCreator/saga';
import { authSagaWatcher, tokenRefreshWatcherSaga } from './containers/Auth/saga';

const sagas = [
  adminPageSagaWatcher,
  authSagaWatcher,
  tokenRefreshWatcherSaga,
  lessonsSagaWatcher,
  lessonCreatorSagaWatcher
];

export default function* rootSaga () {
  yield all(sagas.map(fork));
}
