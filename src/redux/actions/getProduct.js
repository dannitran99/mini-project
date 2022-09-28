import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getData = createAsyncThunk(
  // Tên action
  'data/getData',

  // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
  async (data, { rejectWithValue }) => {
    // Gọi lên API backend
    const responseProduct = await fetch(
      'https://fakestoreapi.com/products',
      {
        method: 'GET',
      }
    );
    const jsonDataProduct = await responseProduct.json();
    const responseCategory = await fetch(
      'https://fakestoreapi.com/products/categories',
      {
        method: 'GET',
      }
    );
    const jsonDataCategory = await responseCategory.json();
    if (responseProduct.status < 200 || responseProduct.status >= 300) {
      return rejectWithValue(jsonDataProduct);
    }
    if (responseCategory.status < 200 || responseCategory.status >= 300) {
      return rejectWithValue(jsonDataCategory);
    }
    const jsonData ={product:jsonDataProduct,category:jsonDataCategory};
    // Còn không thì trả về dữ liệu
    return jsonData;
  }
);

export const getDataByCategory = createAsyncThunk(
  'data/getDataByCategory',

  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${data}`,
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

export const getProduct = createSlice({
  name: 'getProduct',
  initialState: {
    isLoading:false,
    errorMessage: '',
    data:[],
    category:[],
    filter:[]
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
      state.data = action.payload.product;
      state.category = action.payload.category;
    });

    // Khi thực hiện action thất bại (Promise rejected)
    builder.addCase(getData.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });

    builder.addCase(getDataByCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDataByCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.filter = action.payload;
    });

    builder.addCase(getDataByCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
},
});

// this is for dispatch
// export const { loadData } = getProduct.actions;

// this is for configureStore
export default getProduct.reducer;