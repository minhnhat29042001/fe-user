/* eslint-disable no-undef */

import axios from 'axios';
import { AxiosServicePost } from './axios-services';
import { API, EndpointConfig, getBaseUrl } from './endpoint-config';

export enum EGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}
export interface IUserRegisterParams {
  username: string;
  password: string;
  name: string;
  email: string;
  birth: string | Date | number;
  avatar: string;
  phone: string;
  gender: EGender;
}

export interface IUserLoginParams {
  username: string;
  password: string;
}

export interface IIUserRegisterResult extends IUserRegisterParams {
  id: string;
}

export const registerUser = async (data: IUserRegisterParams) => {
  return await AxiosServicePost(EndpointConfig.auth.REGISTER, data, undefined, false);
};

export const loginUser = async (data: any) => {
  return await AxiosServicePost(EndpointConfig.auth.LOGIN, data, undefined, false);
};

export const resetPassword = async (data: any) => {
  return await AxiosServicePost(EndpointConfig.auth.RESET, undefined, data, false);
};

export const forgotPassword = (data: any) => {
  return AxiosServicePost(`${EndpointConfig.auth.FORGOT_PASSWORD}?email=${data?.email}&feHomePage=https://spectacular-clafoutis-af79ec.netlify.app`, {...data, feHomePage: 'https://spectacular-clafoutis-af79ec.netlify.app/'})
}

export const updateUser = (data: any) => {
  return API.put(EndpointConfig.auth.UPDATE, data)
}

export const uploadAvatar = (data: any, username: string) => {
  return axios.post(`${getBaseUrl()}${EndpointConfig.auth.FILE_UPLOAD}?username=${username}`, data)
}


export const changePassword = ( data: any) => {
  return axios.post(`${getBaseUrl()}${EndpointConfig.auth.CHANGE_PASSWORD}`, data)
}
