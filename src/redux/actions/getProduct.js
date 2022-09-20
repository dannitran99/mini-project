import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getProduct = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    loadData: (state, action) => {
      const todo = {
        id: uuid(),
        text: action.payload,
      };

      state.push(todo);
  },
}});

// this is for dispatch
export const { loadData } = getProduct.actions;

// this is for configureStore
export default getProduct.reducer;