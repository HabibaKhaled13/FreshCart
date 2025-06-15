import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import img from "../../assets/images/cart.png";

export default function Cart() {
  let { updateProduct, deleteProduct, getLoggedUserProduct } =
    useContext(CartContext);

  const [Cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getLoggedProduct() {
    setIsLoading(true);
    let response = await getLoggedUserProduct();
    if (response.data.status === "success") {
      setCart(response.data.data);
    
      setIsLoading(false);
    }
  }

  async function getUpdateProduct(id, count) {
    let response = await updateProduct(id, count);
    if (response.data.status == "success") {
      setCart(response.data.data);



      toast.success("Product added to cart successfully!");
    } else {
      toast.error("Failed to add product to cart");
    }
  }

  async function getDeleteProduct(id) {
    let response = await deleteProduct(id);
    if (response.data.status == "success") {
      setCart(response.data.data);
      getLoggedProduct();
      toast.success("Product delete to cart successfully!");
    }
  }
  function totalPrice(total, fees) {
    return eval(total + fees);
  }
  useEffect(() => {
    getLoggedProduct();
  }, []);

  return (
    <>
      <section>
        <div className="container md:w-11/12 w-full mx-auto">
          <nav
            className="flex  pb-3 ps-1 text-gray-700  mb-8"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  to=""
                  className="inline-flex items-center font-medium text-emerald-600 hover:text-emerald-700"
                >
                  Home
                </Link>
              </li>

              <li aria-current="page">
                <div className="flex items-center">
                  <span>/</span>
                  <span className="ms-1 font-medium text-gray-500 md:ms-2">
                    Cart
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          {isLoading ? (
            <div className="parent flex items-center justify-center w-full h-[80vh]">
              <span className="loader"></span>
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
          ) : Cart?.products?.length > 0 ? (
            <>
              <div className="title mb-4">
                <h2 className="text-4xl font-bold mb-3 text-gray-700">
                  Shop Cart
                </h2>
                <span className="text-slate-500 text-[15px] font-medium">
                  Shopping in 382480
                </span>
              </div>

              <div className="row md:justify-between md:g-y-0 gap-y-12">
                <div className="md:w-3/5 w-full">
                  <div
                    className="flex items-center px-3 py-2 mb-6 text-[15px] border border-red-700 text-red-800 rounded-lg bg-red-100"
                    role="alert"
                  >
                    <span className="sr-only">Info</span>
                    <div>
                      You’ve got FREE delivery.{" "}
                      <span className="font-medium">Start checkout now!</span>
                    </div>
                  </div>

                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-center text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase border-b">
                        <tr>
                          <th scope="col" className="px-16 py-3">
                            <span className="sr-only">Image</span>
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Product
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Qty
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Price
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Cart.products.map((product) => (
                          <tr
                            key={product.product.id}
                            className="bg-white border-b border-gray-200 hover:bg-gray-50 "
                          >
                            <td className="p-4">
                              <img
                                src={product.product.imageCover}
                                className="w-16 md:w-32 max-w-full max-h-full"
                              />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                              {product.product.title}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-center">
                                <button
                                  onClick={() =>
                                    getUpdateProduct(
                                      product.product.id,
                                      product.count - 1
                                    )
                                  }
                                  className="inline-flex items-center justify-center h-7 w-7 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
                                >
                                  <svg
                                    className="w-3 h-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 2"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M1 1h16"
                                    />
                                  </svg>
                                </button>
                                <span className="inline-flex items-center justify-center p-1 h-7 w-7 text-sm text-gray-500 bg-white border border-gray-300">
                                  {product.count}
                                </span>
                                <button
                                  onClick={() =>
                                    getUpdateProduct(
                                      product.product.id,
                                      product.count + 1
                                    )
                                  }
                                  className="inline-flex items-center justify-center h-7 w-7 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
                                >
                                  <svg
                                    className="w-3 h-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 1v16M1 9h16"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </td>
                            <td className="px-2 py-4 font-semibold text-gray-900 text-sm">
                              {product.price} EGP
                            </td>
                            <td className="px-6 py-4">
                              <span
                                onClick={() =>
                                  getDeleteProduct(product.product.id)
                                }
                                className="cursor-pointer font-medium bg-red-600 p-2 rounded-md text-white"
                              >
                                Remove
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div className="btn ">
                      <Link to="/shop">
                        <button className="text-white md:w-auto w-full bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-bold rounded-lg transition-all duration-200 text-sm px-4 py-2.5 mt-5">
                          Continue Shopping
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 w-full">
                  <div className="relative overflow-x-auto border rounded-lg md:p-8 p-4">
                    <h2 className="mb-4 text-gray-700 font-bold text-xl">
                      Summary
                    </h2>
                    <div className="cash border rounded-lg">
                      <div className="flex justify-between px-5 py-2 text-sm text-gray-900">
                        <span>Item Subtotal</span>
                        <span>{Cart.totalCartPrice} EGP</span>
                      </div>
                      <div className="flex justify-between border-b px-5 py-2 text-sm text-gray-900">
                        <span>Service Fee</span>
                        <span>25 EGP</span>
                      </div>
                      <div className="flex justify-between border-b px-5 py-3 text-gray-900 text-sm font-semibold">
                        <span>Subtotal</span>
                        <span>{totalPrice(Cart.totalCartPrice, 25)} EGP</span>
                      </div>
                    </div>
                    <Link to="/checkout">
                      <button className="text-white bg-emerald-700 uppercase hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-semibold rounded-lg w-full flex justify-between px-5 py-2.5 mt-5">
                        Go To Checkout
                        <span className="ms-auto">
                          {totalPrice(Cart.totalCartPrice, 25)} EGP
                        </span>
                      </button>
                    </Link>
                    <p className="text-[13px] text-slate-500 font-medium mt-3">
                      By placing your order, you agree to the Freshcart{" "}
                      <span className="text-emerald-600">Terms of Service</span>{" "}
                      and{" "}
                      <span className="text-emerald-600">Privacy Policy</span>.
                    </p>

                    <div className="promo mt-8">
                      <h2 className="mb-3 text-gray-700 font-bold text-md">
                        Add Promo or Gift Card
                      </h2>
                      <div>
                        <input
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-emerald-600 block w-full p-2.5"
                          placeholder="Promo or Gift Card"
                        />
                        <button className="text-black hover:text-white bg-white hover:bg-black text-sm transition-all duration-300 border border-black font-semibold rounded-lg w-full py-2.5 mt-5">
                          Redeem
                        </button>
                        <p className="text-[13px] text-slate-500 font-medium mt-2">
                          Terms & Conditions apply
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="title flex flex-col items-center justify-center text-center w-full mx-auto my-10">
                <img src={img} alt="cart empty" className="w-1/5 text-center" />
                <h2 className="text-2xl font-medium mb-3 mt-5 text-gray-800">
                  Your cart is empty
                </h2>
                <p className="text-gray-500">
                  Looks like you have not added anything to your cart. Go ahead
                  & explore top categories.
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
