import { getThunksStart, getThunksSuccess, getThunksFailure } from './actions';

// import { getIsLoading } from './selectors';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const forThunk = () => async (dispatch, getState) => {
  dispatch(getThunksStart());
  try {
    // const loadingStatus = getIsLoading(getState());
    // console.log(loadingStatus);
    const response = await fetch('http://api.tvmaze.com/shows/180/episodes', {
      method: 'GET',
    });

    const value = await response.json();

    if (response.status === 200) {
      console.log(response);
      dispatch(getThunksSuccess(value));
    } else {
      throw new Error('error');
    }
    await delay(1000);
  } catch (e) {
    dispatch(getThunksFailure());
  }
};
