import { GET_SERIES_REQUEST } from './types';
import * as middlewaresActions from './actions';

export const tvmazeFetchMiddleware = store => next => action => {
  if (action.type === GET_SERIES_REQUEST) {
    fetch('http://api.tvmaze.com/shows/180/episodes', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(series => store.dispatch(middlewaresActions.getSeriesSuccess(series)))
      .catch(error => store.dispatch(middlewaresActions.getSeriesFailure(error)));
  }

  return next(action);
};

export const execTrace = store => next => action => {
  const prevState = store.getState();
  console.time('trace');
  const result = next(action);
  const nextState = store.getState();
  console.timeEnd('trace'); // можем  замерить время исполнения

  console.log({ prevState, nextState }); // можем посмотреть, как изменился state после нашего action

  return result;
};
