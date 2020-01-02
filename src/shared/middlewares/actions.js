// import { GET_SERIES_REQUEST, GET_SERIES_SUCCESS, GET_SERIES_FAILURE } from './types';

// export const getSeriesRequest = payload => ({ type: GET_SERIES_REQUEST, payload });
// export const getSeriesSuccess = payload => ({ type: GET_SERIES_SUCCESS, payload });
// export const getSeriesFailure = payload => ({ type: GET_SERIES_FAILURE, payload });

import { createActions } from 'redux-actions';

export const { getSeriesRequest, getSeriesSuccess, getSeriesFailure } = createActions(
  'GET_SERIES_REQUEST',
  'GET_SERIES_SUCCESS',
  'GET_SERIES_FAILURE',
);

// export const {
//   series: { getSeriesRequest, getSeriesSuccess, getSeriesFailure },
// } = createActions({
//   SERIES: { GET_SERIES_REQUEST: null, GET_SERIES_SUCCESS: null, GET_SERIES_FAILURE: null },
// });
