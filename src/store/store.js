import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { tvmazeFetchMiddleware /* , execTrace */ } from './rootMiddlewares';

// import { classicReduxActions } from '@shared/classicRedux';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export const storeCreator = () => {
  const composeDevTools =
    (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [tvmazeFetchMiddleware, thunk /* , execTrace */, sagaMiddleware];
  const store = createStore(
    rootReducer,
    // {}, // второй аргумент - payloaded state для регидрации
    composeDevTools(
      applyMiddleware(...middlewares),
      /* process.env.NODE_ENV === 'development' &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(), */
    ),
  );

  sagaMiddleware.run(rootSaga);

  // console.log(store.getState());

  // store.subscribe(() => console.log(store.getState()));

  // // console.log(classicReduxActions.increaseCounter(3));

  // store.dispatch(classicReduxActions.increaseCounter(3));

  return store;
};
