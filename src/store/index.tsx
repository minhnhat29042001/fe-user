import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootSaga } from '../sagas';

import authSlice from './auth.slice';
import cartSlice from './cart.slice';
import productSlice from './product.slice';
import startUpSlice from './start-up.slice';
import userSlice from './user.slice';
const reducers = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
  product: productSlice.reducer,
  startup: startUpSlice.reducer,
  cart: cartSlice.reducer
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleWare]
});
sagaMiddleWare.run(rootSaga);

export const actions = {
  auth: authSlice.actions,
  user: userSlice.actions,
  product: productSlice.actions,
  startup: startUpSlice.actions,
  cart: cartSlice.actions 
};
