import { handleActions } from 'redux-actions';
import { getThunksRequest, getThunksStart, getThunksSuccess, getThunksFailure } from './actions';

const initialState = {
  loadingStatus: null,
  series: [],
  error: null,
};

export const reduxThunkReducer = handleActions(
  {
    [getThunksRequest]: undefined,
    [getThunksStart]: state => ({ ...state, loadingStatus: 'loading' }),
    [getThunksSuccess]: (state, action) => ({
      ...state,
      loadingStatus: 'success',
      series: action.payload,
    }),
    [getThunksFailure]: (state, action) => ({
      ...state,
      loadingStatus: 'failure',
      series: action.payload,
    }),
  },
  initialState,
);
