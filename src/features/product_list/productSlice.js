import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductsbyfilter } from "./productApi";

export const fetchAllProductsAsync = createAsyncThunk("products", async () => {
  const response = await fetchAllProducts();
  return response.data;
});
export const fetchProductsbyfilterAsync = createAsyncThunk(
  "product/fetchProductsByFilter",
  async ({ filter, sort }) => {
    const response = await fetchProductsbyfilter(filter, sort);
    return response.data;
  }
);

// 'products is a typeprefix or "action type prefix'
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: "idle",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductsbyfilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsbyfilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => {
  return state.product.products;
};

export default productSlice.reducer;

// export const selectAllProducts = (state) => state.product.products:-
// This is a selector function to access the products array from the Redux state.
// Selectors are used to extract specific pieces of data from the Redux store.
// In this case, selectAllProducts is a function that takes the entire Redux state
// as an argument and returns the products array from the product slice of the state.
