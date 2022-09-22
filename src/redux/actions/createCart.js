import { createSlice} from '@reduxjs/toolkit';

export const createCart = createSlice({
  name: 'createCart',
  initialState: {
    isLoading:false,
    errorMessage: '',
    data:[],
    count:0
  },
  reducers: {
    addToCart: (state, action) => {
        // const notFound = state.data.map(element => {
        //     if (element.id === action.payload.id) {
        //         element.number++;
        //       return false;
        //     }
        //     return {id:action.payload.id, title:action.payload.title, price:action.payload.price,number:1};
        //   });
        // state.count++;
        // notFound && state.data.push(notFound[0]);
    },
  },
});

// this is for dispatch
export const { addToCart } = createCart.actions;

// this is for configureStore
export default createCart.reducer;