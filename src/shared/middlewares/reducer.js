// import { GET_SERIES_REQUEST, GET_SERIES_SUCCESS, GET_SERIES_FAILURE } from './types';

import { handleActions } from 'redux-actions';
import { getSeriesRequest, getSeriesSuccess, getSeriesFailure } from './actions';

export const initialState = {
  isLoading: null,
  series: [],
  error: null,
};

// export const middlewaresReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_SERIES_REQUEST:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case GET_SERIES_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         series: action.payload,
//       };
//     case GET_SERIES_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         series: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export const middlewaresReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case getSeriesRequest.toString():
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case getSeriesSuccess.toString():
//       return {
//         ...state,
//         isLoading: false,
//         series: action.payload,
//       };
//     case getSeriesFailure.toString():
//       return {
//         ...state,
//         isLoading: false,
//         series: action.payload,
//       };

//     default:
//       return state;
//   }
// };
export const middlewaresReducer = handleActions(
  {
    [getSeriesRequest.toString()]: state => ({ ...state, isLoading: true }),
    [getSeriesSuccess.toString()]: (state, action) => ({
      ...state,
      isLoading: false,
      series: action.payload,
    }),
    [getSeriesFailure.toString()]: (state, action) => ({
      ...state,
      isLoading: false,
      series: action.payload,
    }),
  },
  initialState,
);
