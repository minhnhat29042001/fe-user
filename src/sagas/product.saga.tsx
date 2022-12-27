/* eslint-disable no-unused-vars */

import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllProductAPI, getAllProductGroupAPI } from '../api/product';
import { actions } from '../store';
import { ProductGroupType, ProductType } from '../store/product.slice';
import { removeSpecialString, replaceSpace, toLowerCaseNonAccentVietnamese } from '../utils/string';

export function* callGetAllProductAPI(): any {
  yield put(actions.product.getAllProductStart());
  try {
    const response = yield call(getAllProductAPI);
    if (response.status === 200 && !response.hasErrors) {
      //console.log(response);
      const productList: ProductType[] = response.data.content;
      productList.forEach(
        (item) =>
          (item.parsedName = replaceSpace(
            removeSpecialString(toLowerCaseNonAccentVietnamese(item.name)),
            '-'
          ))
      );
      yield put(actions.product.getAllProductSuccess({ productList: productList }));
    } else {
      yield put(
        actions.product.getAllProductFailed({ getAllProductErr: JSON.stringify(response) })
      );
    }
  } catch (e) {
    yield put(actions.product.getAllProductFailed({ getAllProductErr: JSON.stringify(e) }));
  }
}

export function* callGetAllProductListAPI(): any {
  console.log(3);
  yield put(actions.product.getAllProductGroupStart());
  try {
    const response = yield call(getAllProductGroupAPI);
    if (response.status === 200 && !response.hasErrors) {
      console.log(response);
      const productGroup: ProductGroupType[] = response.data.content;
      productGroup.forEach(
        (item) =>
          (item.parsedName = replaceSpace(
            removeSpecialString(toLowerCaseNonAccentVietnamese(item.name)),
            '-'
          ))
      );
      yield put(actions.product.getAllProductGroupSuccess({ productGroup: productGroup }));
    } else {
      yield put(
        actions.product.getAllProductGrouptFailed({
          getAllProductGroupErr: JSON.stringify(response)
        })
      );
    }
  } catch (e) {
    yield put(
      actions.product.getAllProductGrouptFailed({ getAllProductGroupErr: JSON.stringify(e) })
    );
  }
}
export function* actionProductWatcher() {
  yield takeLatest('product/getAllProduct', callGetAllProductAPI);
  yield takeLatest('product/getAllProductGroup', callGetAllProductListAPI);
}
