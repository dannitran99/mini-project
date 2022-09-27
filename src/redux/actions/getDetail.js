import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';



export const getDetailProduct = createAsyncThunk(
  'data/getDetailProduct',
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${data}`,
      {
        method: 'GET',
      }
    );
    const jsonData = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(jsonData);
    }
    return jsonData;
  }
);

export const getDetail = createSlice({
  name: 'getDetail',
  initialState: {
    isLoading:false,
    errorMessage: '',
    data:[],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getDetailProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDetailProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getDetailProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
},
});

export default getDetail.reducer;