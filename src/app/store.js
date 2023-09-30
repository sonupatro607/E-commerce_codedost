import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/product_list/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
