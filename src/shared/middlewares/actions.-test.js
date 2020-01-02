import { getSeriesRequest, getSeriesSuccess, getSeriesFailure } from './actions';

import { initialState } from './reducer';

it('', () => {
  const state0 = shows(undefined, {
    type: '@@TEST/INIT',
  });
  expect(state0).toEqual(initialState);
});

it('', () => {
  const state1 = shows(initialState, getSeriesRequest());
  expect(state1.isloading).toBeTruthy();
});
