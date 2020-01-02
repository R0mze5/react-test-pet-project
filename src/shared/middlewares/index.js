import * as actions from './actions';
import * as selectors from './selectors';

export { middlewaresReducer } from './reducer';
export { tvmazeFetchMiddleware, execTrace } from './middlewares';

export const middlewaresActions = actions;
export const middlewaresSelectors = selectors;
