import axios from 'axios';
import { AxiosServiceGet } from './axios-services';
import { API, EndpointConfig } from './endpoint-config';

export const getAllProductAPI = async () => {
  return await AxiosServiceGet(
    EndpointConfig.product.GET_ALL_PRODUCTS_WITH_GROUP,
    undefined,
    false
  );
};

export const getAllProductGroupAPI = async () => {
  return await AxiosServiceGet(EndpointConfig.product.GET_ALL_PRODUCT_GROUP, undefined, false);
};

export const getListInfoSales = () => {
  return API.get(EndpointConfig.product.GET_ALL_DISCOUNT)
}

export const selectDiscount = (data: any) => {
  return API.post(EndpointConfig.product.CHECK_DISCOUNT, data)
}


export const getListBank = () => {
  return axios.post(EndpointConfig.product.GET_LIST_BANK, {tmn_code: '7B8WU0OZ'})
}

export const createOrder = (data: any) => {
  return API.post(EndpointConfig.order.CREATE, data)
}

export const createPayment = (data: any) => {
  return API.post(EndpointConfig.order.PAYMENT_ORDER, data)
}