import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import * as actions from './actions';

const loadingStatus = handleActions(
  {
    [actions.getXkcdImageStart]: () => 'loading',
    [actions.getXkcdImageSuccess]: () => 'success',
    [actions.getXkcdImageFailure]: () => 'failure',
  },
  null,
);

export const content = handleActions(
  {
    [actions.getXkcdImageRequest]: undefined,
    [actions.getXkcdImageSuccess]: (state, action) => action.payload,
  },
  null,
);

export const reduxSagaReducer = combineReducers({ content, loadingStatus });
