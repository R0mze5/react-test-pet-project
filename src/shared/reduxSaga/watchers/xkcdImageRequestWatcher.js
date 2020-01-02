import { takeEvery, call, put, all, delay } from 'redux-saga/effects';
import * as actions from '../actions';

import { getXkcdImage } from '../api';

export function* worker(action) {
  try {
    yield put(actions.getXkcdImageStart());
    const { response } = yield all({ response: call(getXkcdImage), delay: delay(1500) });

    yield put(actions.getXkcdImageSuccess(response));
  } catch (error) {
    yield put(actions.getXkcdImageFailure(error));
  }
}

export function* xkcdImageRequestWatcher() {
  yield takeEvery(actions.getXkcdImageRequest, worker);
}
