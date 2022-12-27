import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  productList: [],
  totalPrice: 0
};

const setTotalPrice = (state: any) => {
  state.totalPrice = state.productList.reduce(
    (total: number, product: any) => total + Number(product.price) * Number(product.quantity),
    0
  );
};

const cartSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    addToCart(state, action) {
      const isExisting = state.productList.find(
        (product: any) => product.id === action.payload?.id
      );
      if (isExisting)
        state.productList = state.productList.map((product: any) =>
          product.id === isExisting.id
            ? { ...product, totalPrice:  Number(product?.quantity) + 1 * Number(product.price)  , quantity: Number(product?.quantity) + 1}
            : product
        );
      else state.productList.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price * 1 });
      setTotalPrice(state);
    },
    inCreaseQty(state, action) {
      state.productList = state.productList.map((product: any) => {
        if (product.id === action.payload.id) {
          const quantity = Number(product.quantity) + 1;
          product.totalPrice = quantity * product.price
          product.quantity = quantity
          return product;
        }
        return product;
      });
      setTotalPrice(state);
    },
    deCreaseQty(state, action) {
      state.productList = state.productList.map((product: any) => {
        if (product.id === action.payload.id && Number(product.quantity) - 1 !== 0) {
          const quantity = Number(product.quantity) - 1;
          product.totalPrice = quantity * product.price
          product.quantity = quantity
          return product;
        }
        return product;
      });
      setTotalPrice(state);
    },

    delCartItem(state, action) {
      if (window.confirm('Bạn có chắc muốn xóa sản phẩm khỏi giỏ hàng')) {

        state.productList = state.productList.filter(
          (product: any) => product.id !== action.payload.id
        );
        setTotalPrice(state);
      }
    },

    setQuantity(state, action) {
      if (/^-?\d+\.?\d*$/.test(action.payload.quantity)) {
        state.productList = state.productList.map((product: any) => {
          const quantity = Number(action.payload.quantity);
          if (product.id === action.payload.id && quantity > 0) {
            product.totalPrice = quantity * product.price
            product.quantity = quantity;
            return product;
          }
          return product;
        });
        setTotalPrice(state);
      }
    },

    clearCart(state) {
      state.productList = []
      state.totalPrice = 0
    }
  }
});

export default cartSlice;
