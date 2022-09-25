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
    plusProduct: (state, action) => {
      state.data.map(element => {
          if (element.id === action.payload) {
              element.number++;
          }
        });
      state.count++;
    },
    minusProduct: (state, action) => {
      state.data.map((element,index) => {
          if (element.id === action.payload) {
            console.log(element.id,action.payload)
            element.number ==1?state.data.splice(index, 1):element.number--;
          }
        });
      state.count--;
    },
  },
});

// this is for dispatch
export const { addToCart,plusProduct,minusProduct } = createCart.actions;

// this is for configureStore
export default createCart.reducer;