import { configureStore } from '@reduxjs/toolkit';
import getProductReducer from '../actions/getProduct';


export default configureStore({
  reducer: {
    getProduct:getProductReducer,
  },
});