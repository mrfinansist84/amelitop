import { all, fork } from 'redux-saga/effects';
import { adminPageSagaWatcher } from './containers/AdminPage/saga';

const sagas = [
  adminPageSagaWatcher
];

export default function* rootSaga () {
  yield all(sagas.map(fork))
};
