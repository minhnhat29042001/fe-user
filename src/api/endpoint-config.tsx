import axios from "axios";
import { getAccessToken } from "../utils/redux-utils";

export const EndpointConfig = {
  prefix: {
    BASE_URL: 'https://web-clone-the-coffee-house-production.up.railway.app'
  },
  auth: {
    VALIDATE_TOKEN: '/auth/validateToken', // validate a jwt token
    REGISTER: '/auth/register', // Register a new customer account
    LOGIN: '/auth/login',
    FORGOT_PASSWORD: '/auth/forgotPassword',
    UPDATE: '/UsersManagement/UpdateUser',
    FILE_UPLOAD: '/UsersManagement/saveUserAvatar',
    CHANGE_PASSWORD: '/auth/changePassword',
    RESET: '/auth/resetPassword'
  },
  product: {
    GET_ALL_PRODUCTS: '/api/ProductsManagement/common/GetAllProducts',
    GET_ALL_PRODUCTS_WITH_GROUP: '/api/ProductsManagement/common/GetAllProductsWithProductGroup',
    GET_ALL_PRODUCT_GROUP: '/api/ProductGroupManagement/common/GetAllProductGroups',
    GET_ALL_DISCOUNT: '/api/v1/discount/common/get-all',
    CHECK_DISCOUNT: '/api/v1/discount/check-coupon',
    GET_LIST_BANK: 'https://sandbox.vnpayment.vn/qrpayauth/api/merchant/get_bank_list'
  },
  order: {
    CREATE: '/api/v1/orders/create-order',
    PAYMENT_ORDER: '/api/v1/payment/payment-order',
  }
};

export const getBaseUrl = () => {
  return EndpointConfig.prefix.BASE_URL;
};

const axiosCustom = axios.create({
  baseURL: getBaseUrl()
})

axiosCustom.defaults.headers.common.authorization = `Bearer ${getAccessToken()}`

export const API = axiosCustom
