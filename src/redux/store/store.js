import { configureStore } from '@reduxjs/toolkit';
import getProductReducer from '../actions/getProduct';
import createCartReducer from '../actions/createCart';
import getDetailReducer from '../actions/getDetail';

export default configureStore({
  reducer: {
    getProduct:getProductReducer,
    createCart:createCartReducer,
    getDetail:getDetailReducer,
  },
});