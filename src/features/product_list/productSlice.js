import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchProductsbyfilter,
  fetchBrands,
  fetchCatgeories,
  fetchProductById,
} from "./productApi";

export const fetchAllProductsAsync = createAsyncThunk("products", async () => {
  const response = await fetchAllProducts();
  return response.data;
});
export const fetchProductsbyfilterAsync = createAsyncThunk(
  "product/fetchProductsByFilter",
  async ({ filter, sort, pagination }) => {
    const response = await fetchProductsbyfilter(filter, sort, pagination);
    return response.data;
  }
);
export const fetchBrandsAsync = createAsyncThunk(
  "product/fetchBrandsAsync",
  async () => {
    const response = await fetchBrands();
    return response.data;
  }
);
export const fetchCatgeoriesAsync = createAsyncThunk(
  "product/fetchCatgeoriesAsync",
  async () => {
    const response = await fetchCatgeories();
    return response.data;
  }
);
export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductByIdAsync",
  async (id) => {
    const response = await fetchProductById(id);
    return response.data;
  }
);

// 'products is a typeprefix or "action type prefix'
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    brands: [],
    catgeories: [],
    status: "idle",
    totalItems: 0,
    selectedProduct: null,
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
        // state.products= action.payload ---->{products : data , totalItems:totalItems}
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.brands = action.payload;
      })
      .addCase(fetchCatgeoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCatgeoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.catgeories = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

//selector function for useSelector (only for products) --> it pass a particular data
export const selectAllProducts = (state) => {
  return state.product.products;
};
//selector function for useSelector (only for totalItems)
export const selecttotalItems = (state) => {
  return state.product.totalItems;
};
//selector function for useSelector (only for filters brands and catgeories)
export const selectbrandsItems = (state) => {
  return state.product.brands;
};
export const selectcatgeoriesItems = (state) => {
  return state.product.catgeories;
};

//selector function for selection the product by id
export const selectProductById = (state) => {
  return state.product.selectedProduct;
};

export default productSlice.reducer;

// export const selectAllProducts = (state) => state.product.products:-
// This is a selector function to access the products array from the Redux state.
// Selectors are used to extract specific pieces of data from the Redux store.
// In this case, selectAllProducts is a function that takes the entire Redux state
// as an argument and returns the products array from the product slice of the state.
