/* eslint-disable no-unused-vars */

import { call, put, takeLatest } from 'redux-saga/effects';
import { IUserRegisterParams, loginUser, registerUser } from '../api/auth';
import { actions } from '../store';

const TAG = 'auth.saga';
function* callLoginAPI(action: any): any {
  const body = action.payload;
  yield put(actions.auth.loginStart());
  try {
    const response = yield  call(loginUser, { username: body.username, password: body.password });
    yield put(actions.user.saveUserInformation(response.data.content));
    
    yield put(actions.auth.loginSuccess({ accessToken: response.data.content.token }));
    window.location.reload()
  } catch (e: any) {
    alert(e?.response?.data?.errors?.join() || e?.message )
    yield put(actions.auth.loginFailed({ errorLogin: e?.response?.data?.errors?.join() || e?.message }));
  }
}

function* callRegisterAPI(action: any): any {
  const body = action.payload as IUserRegisterParams;
  yield put(actions.auth.registerStart());
  try {
    const response = yield call(registerUser, body);
    if (response.status === 200 && !response.hasErrors) {
      yield put(actions.auth.login({ username: body.username, password: body.password }));
      alert("Đăng ký thành công");
    } else yield put(actions.auth.registerFailed({ errorLogin: JSON.stringify(response) }));
  } catch (e: any) {
    alert(e?.response?.data?.errors?.join() || e?.message )
    yield put(actions.auth.registerFailed({ errorLogin: e?.response?.data?.errors?.join() || e?.message }));
  }
}

function* callLogOutActions(): any {
  yield put(actions.user.deleteUserInfo());
}

export function* actionAuthWatcher() {
  yield takeLatest('auth/login', callLoginAPI);
  yield takeLatest('auth/logout', callLogOutActions);
  yield takeLatest('auth/register', callRegisterAPI);
}
