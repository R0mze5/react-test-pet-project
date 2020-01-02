import { all, fork } from 'redux-saga/effects';

import { reduxSagaWatchers } from '@shared/reduxSaga';

const watchers = [...reduxSagaWatchers];

export function* rootSaga() {
  yield all(
    watchers.map(watcher => {
      return fork(watcher);
    }),
  );
}
