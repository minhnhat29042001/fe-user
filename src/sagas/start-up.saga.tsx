import { put, takeLatest } from 'redux-saga/effects';
import { actions } from '../store';

export function* callStartUpActions() {
  console.log(1);
  yield put(actions.product.getAllProduct());
  yield put(actions.product.getAllProductGroup());
  yield put(actions.startup.finishStartUp());
}

export function* actionStartUpWatcher() {
  yield takeLatest('startup/callStartUp', callStartUpActions);
}
