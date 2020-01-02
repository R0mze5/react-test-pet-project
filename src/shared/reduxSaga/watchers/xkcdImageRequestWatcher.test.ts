import { takeEvery, call, put, all, delay } from 'redux-saga/effects';
import * as actions from '../actions';

import { xkcdImageRequestWatcher, worker } from './xkcdImageRequestWatcher';

describe('xkcdImageRequestWatcher', () => {
  it('1', () => {
    const iterator = xkcdImageRequestWatcher();
    expect(iterator.next().value).toEqual(
      takeEvery(actions.getXkcdImageRequest.toString(), worker),
    );
  });
});

describe('worker', () => {
  it('2', () => {
    const iterator = worker();

    // expect(iterator.next().value).toEqual(put(actions.getXkcdImageStart()))
    // expect(
    //   iterator.throw({message:'error'})
    //     .value
    //   ).toEqual(
    //     put(actions.getXkcdImageFailure({message:'error'})
    //   )
    // )
  });
});
