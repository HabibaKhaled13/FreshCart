import React from "react";
import "./App.css";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import Layout from "../src/Components/Layout/Layout";
import Products from "../src/Components/Products/Products";
import Categories from "../src/Components/Categories/Categories";
import Login from "../src/Components/Login/Login";
import Brands from "../src/Components/Brands/Brands";
import Cart from "../src/Components/Cart/Cart";
import WishList from "../src/Components/WishList/WishList";
import Register from "../src/Components/Register/Register";
import NotFound from "../src/Components/NotFound/NotFound";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UserContextProvider from "./Context/UserContext";
import CartContextProvider from "./Context/CartContext";
import { Toaster } from "react-hot-toast";
import WishlistContextProvider from "./Context/WishlistContext";
import CategoryContextProvider from "./Context/CategoryContext";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import PasswordContextProvider from "./Context/PasswordContext";
import VerifyResetPassword from "./Components/VerifyResetPassword/VerifyResetPassword";
import CheckOut from "./Components/CheckOut/CheckOut";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import AllOrders from "./Components/AllOrders/AllOrders";

function App() {
  let query = new QueryClient();
  let x = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedRoute><Home /> </ProtectedRoute>},
        { path: "shop", element: <ProtectedRoute> <Products /> </ProtectedRoute> },
        { path: "categories", element: <ProtectedRoute> <Categories /> </ProtectedRoute>  },
        { path: "brands", element:     <ProtectedRoute> <Brands /></ProtectedRoute> },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <CheckOut />
            </ProtectedRoute>
          ),
        },
        { path: "productDetails/:id/:category", element: <ProtectedRoute> <ProductDetails />    </ProtectedRoute>},
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "cart", element:  <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: "allorders", element:  <ProtectedRoute><AllOrders /></ProtectedRoute> },
        { path: "*", element: <NotFound /> },
        { path: "forget-password", element: <ForgotPassword /> },
        { path: "verify-reset-password", element: <VerifyResetPassword /> },
      ],
    },
  ]);

  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <QueryClientProvider client={query}>
            <ReactQueryDevtools />
            <Toaster />
            <WishlistContextProvider>
              <CategoryContextProvider>
                <PasswordContextProvider>
                  <RouterProvider router={x}></RouterProvider>
                </PasswordContextProvider>
              </CategoryContextProvider>
            </WishlistContextProvider>
          </QueryClientProvider>
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}
export default App;
