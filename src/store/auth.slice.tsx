/* eslint-disable no-unused-vars */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  isLoggedIn: false,
  errorLogin: '',
  errorRegister: '',
  errorResetPassword: '',
  resetPasswordSuccess: '',
  toggleLogin: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToggleLogin(state, action) {
      state.toggleLogin = action.payload
      // console.log(action.payload)
    },
     

    login(state, payload) {},
    loginStart(state) {
      state.errorLogin = '';
      state.isLoggedIn = false;
      state.errorRegister = '';
    },
    loginSuccess(state, payload) {
      console.log(payload.payload)
      state.accessToken = payload.payload.accessToken;
      state.errorLogin = '';
      state.isLoggedIn = true;
    },
    loginFailed(state, payload) {
      state.accessToken = '';
      state.errorLogin = payload.payload.errorLogin;
      state.isLoggedIn = false;
    },
    logout(state) {
      state.accessToken = '';
      state.errorLogin = '';
      state.isLoggedIn = false;
    },
    register(state, payload) {
      console.log('payload', payload);
    },
    registerStart(state) {
      state.errorRegister = '';
      state.isLoggedIn = false;
    },
    registerFailed(state, payload) {
      state.errorRegister = payload.payload.errorRegister;
    },
    resetPassword(state, payload) {},
    resetPasswordStart(state) {
      state.errorResetPassword = '';
      state.resetPasswordSuccess = '';
    },
    resetPasswordSuccess(state, payload) {
      state.resetPasswordSuccess = payload.payload.resetPasswordSuccess;
    },
    resetPasswordFailed(state, payload) {
      state.errorResetPassword = payload.payload.errorResetPassword;
    }
  }
});

export default authSlice;
