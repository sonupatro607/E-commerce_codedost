import React from "react";
import { Navbar } from "../../features/Navbar/navbar";
import { ProductList } from "../../features/product_list/components/productList";
export const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProductList></ProductList>
    </div>
  );
};
