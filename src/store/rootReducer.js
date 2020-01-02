import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import { classicReduxReducer } from '@shared/classicRedux';
import { middlewaresReducer } from '@shared/middlewares';
import { reduxSagaReducer } from '@shared/reduxSaga';
import { reduxThunkReducer } from '@shared/reduxThunk';

export const rootReducer = combineReducers({
  form: formReducer,
  classicRedux: classicReduxReducer,
  middlewares: middlewaresReducer,
  reduxSaga: reduxSagaReducer,
  reduxThunk: reduxThunkReducer,
});
