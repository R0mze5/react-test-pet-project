import { take, put, call, cancelled, fork, cancel } from 'redux-saga/effects';

export function* loginForm() {
  while (true) {
    const { user, password } = yield take('LOGIN_REQUEST');

    const task = yield fork(authorized, user, password);

    const action = yield take(['LOGOUT', 'LOGIN_ERROR']);

    if (action.type === 'LOGOUT') yield cancel(task);

    // yield call (Api.clear)
  }
}

function* authorized(user, password) {
  try {
    const token = yield call(/* ApiAuth, */ user, password);
    yield put({ type: 'LOGIN_SUCCESS', payload: token });
    return token;
  } catch (error) {
    yield put({ type: 'LOGIN_ERROR' });
  } finally {
    if (yield cancelled()) {
      // логика отмены
    }
  }
}
