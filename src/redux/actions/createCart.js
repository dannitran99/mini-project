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
        let notFound = true;
        state.data.find(element => {
            if (element.id === action.payload.id) {
                element.number++;
                notFound = false;
            }
          });
        state.count++;
        if(notFound) state.data.push({id:action.payload.id, title:action.payload.title, price:action.payload.price,number:1});
    },
  },
});

// this is for dispatch
export const { addToCart } = createCart.actions;

// this is for configureStore
export default createCart.reducer;