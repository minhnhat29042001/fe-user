/* eslint-disable no-unused-vars */

import axios from 'axios';
import { getAccessToken } from '../utils/redux-utils';
import { getBaseUrl } from './endpoint-config';



const headerConfig = () => {
  return {
    Accept: '*/*',
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'application/json'
  };
};
const headerConfigWithAuthRequired = () => {
  return {
    ...headerConfig(),
    Authorization: 'Bearer ' + getAccessToken()
  };
};

const configHeader = (authRequired: boolean) => {
  return authRequired ? headerConfigWithAuthRequired() : headerConfig();
};

export const AxiosServiceGet = async (url: string, params?: any, authRequired = false) => {
  try {
    return await axios({
      method: 'get',
      headers: configHeader(authRequired),
      params: params,
      url: getBaseUrl() + url
    });
  } catch (e) {
    console.log(e);
  }
};

export const AxiosServicePost = (
  url: string,
  data?: any,
  params?: any,
  authRequired = false
) => axios.post(`${getBaseUrl()}${url}`, {
      ...data
    })
