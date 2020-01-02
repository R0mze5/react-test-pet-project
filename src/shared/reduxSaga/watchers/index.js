import { fork, call } from 'redux-saga/effects';

import { xkcdImageRequestWatcher } from './xkcdImageRequestWatcher';

export function* forkSaga() {
  yield fork(forkGenerator); // fork запускает генераторы, которые мы передаем, т.е запускаем их параллельноб т.е - неблокирующая операция
}

function* forkGenerator() {
  yield call(console.log, 'fork');
}

export const reduxSagaWatchers = [forkSaga, xkcdImageRequestWatcher];
