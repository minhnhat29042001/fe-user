/* eslint-disable no-unused-vars */

import { store } from '../store';
import { ProductGroupType } from '../store/product.slice';

export const getAccessToken = (): string => {

  const rootPersist = localStorage.getItem('persist:root')
  if(rootPersist) {
    return JSON.parse(JSON.parse(rootPersist || '')?.auth)?.accessToken || ''
  }
  return ``
};

export const getProductGroup = (): ProductGroupType[] => {
  const state = store.getState();
  return state.product.productGroup;
};
