/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

export type ProductGroupType = {
  id: string;
  name: string;
  parsedName?: string;
};

export type ProductType = {
  id: string;
  name: string;
  imgUrl: string;
  price: number;
  description: string;
  productGroup: ProductGroupType;
  parsedName?: string;
};

const initialState = {
  productList: [] as ProductType[],
  productGroup: [] as ProductGroupType[],
  getAllProductErr: '',
  getAllProductGroupErr: ''
};
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProduct(state) {},
    getAllProductStart(state) {
      state.getAllProductErr = '';
    },
    getAllProductSuccess(state, payload) {
      state.productList = payload.payload.productList;
    },
    getAllProductFailed(state, payload) {
      state.getAllProductErr = payload.payload.getAllProductErr;
    },
    getAllProductGroup(state) {},
    getAllProductGroupStart(state) {
      state.getAllProductGroupErr = '';
    },
    getAllProductGroupSuccess(state, payload) {
      state.productGroup = payload.payload.productGroup;
    },
    getAllProductGrouptFailed(state, payload) {
      state.getAllProductGroupErr = payload.payload.getAllProductGroupErr;
    }
  }
});

export default productSlice;
