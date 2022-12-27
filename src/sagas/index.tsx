import { fork } from 'redux-saga/effects';
import { actionAuthWatcher } from './auth.saga';
import { actionProductWatcher } from './product.saga';
import { actionStartUpWatcher } from './start-up.saga';

export function* rootSaga() {
  yield fork(actionAuthWatcher);
  yield fork(actionProductWatcher);
  yield fork(actionStartUpWatcher);
}
