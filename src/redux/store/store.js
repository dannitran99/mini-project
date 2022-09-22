import { configureStore } from '@reduxjs/toolkit';
import getProductReducer from '../actions/getProduct';
import createCartReducer from '../actions/createCart';


export default configureStore({
  reducer: {
    getProduct:getProductReducer,
    createCart:createCartReducer
  },
});