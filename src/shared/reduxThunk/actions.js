import { createActions } from 'redux-actions';

export const {
  getThunksRequest,
  getThunksStart,
  getThunksSuccess,
  getThunksFailure,
} = createActions(
  'GET_THUNKS_REQUEST',
  'GET_THUNKS_START',
  'GET_THUNKS_SUCCESS',
  'GET_THUNKS_FAILURE',
);
