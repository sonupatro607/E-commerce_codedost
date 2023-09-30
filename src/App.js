import React from "react";
import { Counter } from "./features/counter/Counter";
import { ProductList } from "./features/product_list/components/productList";
import { Home } from "./pages/home/Home";
import "./App.css";
import { LoginPage } from "./pages/login/loginPage";
import { SignupPage } from "./pages/signup/signupPage";
import { createRoot } from "react-dom/client";
import { CartPage } from "./pages/cart/cartPage";
import { CheckoutPage } from "./pages/checkout/checkoutPage";
import productDetailsPage, {
  ProductDetailsPage,
} from "./pages/ProductDetails/productDetailsPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/Login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/Signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/Cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/Checkout",
    element: <CheckoutPage></CheckoutPage>,
  },
  {
    path: "/ProductDetails/:id",
    element: <ProductDetailsPage></ProductDetailsPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
