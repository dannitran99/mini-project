import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getData = createAsyncThunk(
  // Tên action
  'data/getData',

  // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
  async (data, { rejectWithValue }) => {
    // Gọi lên API backend
    const response = await fetch(
      'https://fakestoreapi.com/products',
      {
        method: 'GET',
      }
    );
    // Convert dữ liệu ra json
    const jsonData = await response.json();
    // Nếu bị lỗi thì reject
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(jsonData);
    }
    // Còn không thì trả về dữ liệu
    return jsonData;
  }
);

export const getProduct = createSlice({
  name: 'getProduct',
  initialState: {
    isLoading:false,
    errorMessage: '',
    data:[],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    // Bắt đầu thực hiện action (Promise pending)
    builder.addCase(getData.pending, (state) => {
      // Bật trạng thái loading
      state.isLoading = true;
    });

    // Khi thực hiện action thành công (Promise fulfilled)
    builder.addCase(getData.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.data = action.payload;
      console.log(action.payload);
    });

    // Khi thực hiện action thất bại (Promise rejected)
    builder.addCase(getData.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
},
});

// this is for dispatch
export const { loadData } = getProduct.actions;

// this is for configureStore
export default getProduct.reducer;