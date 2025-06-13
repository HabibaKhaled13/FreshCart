import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import card from "../../assets/images/card.svg";
import cash from "../../assets/images/cash.svg";
import stripe from "../../assets/images/Stripe.png";
import { useFormik } from "formik";
import toast from "react-hot-toast";

export default function AllOrders() {
  let { getLoggedUserProduct, checkOut } = useContext(CartContext);
  const [Cart, setCart] = useState(null);
  const [Time, setTime] = useState("tomorrow");
  const shippingFee = Time == "today" ? 35 : 0;

  function data() {
    toast.error("Please fill out the form first");
  }
  async function getLoggedProduct() {
    let response = await getLoggedUserProduct();
    if (response.data.status == "success") {
      setCart(response.data.data);
    }
  }

  let formik = useFormik({
    initialValues: {
      details: "",
      city: "",
      phone: "",
    },
    onSubmit: () =>
      handleSubmit("67e4d59de162abeefce9c515", "http://localhost:5173"),
  });

  async function handleSubmit(cartId, url) {
    let { data } = await checkOut(cartId, url, formik.values);
    console.log(data.session.url);
    window.location.href = data.session.url;
  }
  function totalPrice(total, fees, shippingFee) {
    return total + fees + shippingFee;
  }

  useEffect(() => {
    getLoggedProduct();
  }, []);

  return (
    <>
      <section >
      <div className="container md:w-11/12 mt-16 w-full mx-auto">
          <div className="title flex justify-between  w-full lg:w-[60%] flex-wrap">
            <h2 className="text-4xl font-bold mb-3 md:mb-0 lg:mb-3 text-gray-700">Order Summary</h2>
            
            <Link
              to="/"
              className="bg-emerald-600 py-[9px]  px-4 mt-2 flex items-center text-center text-white border border-emerald-600 transition-all duration-200 font-medium rounded-md hover:bg-emerald-700 text-sm"
            >
            Back to home
            <i className=" ms-2 fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="row md:justify-between">
            <div className="lg:w-3/5  w-full">
              <div className="address">
                <h2 className=" text-gray-700 mb-4 ">
                  Find order invoice, payment and shipping details here
                </h2>
                <div className="flex justify-between flex-wrap"></div>
              </div>

              <div className="your-order mt-5 md:mb-0 mb-3">
                <div className="border rounded-lg px-4">
                  <h2 className=" font-semibold  my-5 text-center text-gray-800 border-b pb-5">
                    Order ID NEGH60045801115
                  </h2>
                  <h2 className="font-semibold">Delivery Details</h2>
                  {Cart?.products.map((product) => (
                    <div className="border-b  px-4" key={product.product.id}>
                      <div className="row gap-x-10 ">
                        <div className="relative">
                          <img
                            src={product?.product.imageCover}
                            className="w-16 md:w-20 max-w-full max-h-full"
                          />
                          {product.count > 1 ? (
                            <span className="block h-[19px] leading-[19px] text-center absolute top-[-7px] right-0 w-[20px] rounded-full text-white text-[10px] md:text-[9px] font-semibold  bg-gray-400">
                              {product.count}
                            </span>
                          ) : (
                            <span className="hidden h-[19px] leading-[19px] text-center absolute top-[-7px] right-0 w-[20px] rounded-full text-white text-[10px] md:text-[9px] font-semibold  bg-gray-400">
                              {product.count}
                            </span>
                          )}
                        </div>
                        <div>
                          <ul>
                            <li className="text-slate-500 font-semibold text-lg mt-4 mb-1">
                              {" "}
                              {product.product.title}
                            </li>
                            <li className="text-gray-800 font-semibold text-sm mb-1">
                              {" "}
                              {product.product.brand.name}
                            </li>
                            <li>
                              EGP{" "}
                              <span className="text-sm font-semibold ">
                                {product.price}{" "}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 w-full">
              <div className="relative overflow-x-auto  rounded-lg md:px-4 py-3">
                <div className="cash border rounded-lg py-3  ">
                  <h2 className="mb-4 text-gray-700 font-bold text-lg px-4">
                    Order details
                  </h2>
                  <div className="flex justify-between px-5 py-1 text-sm text-gray-600  ">
                    <span>Item Subtotal</span>
                    <span>EGP {Cart?.totalCartPrice}</span>
                  </div>
                  <div className="flex justify-between  px-5 py-1 text-sm text-gray-600 ">
                    <span className="">Service Fee</span>
                    <span>EGP 25</span>
                  </div>
                  <div className="flex justify-between border-b  px-5 pb-3 pt-1  text-sm text-gray-600 ">
                    <span className="">Shipping Fee</span>
                    <span className="">
                      {Time === "today" ? " EGP 35" : "Free"}
                    </span>
                  </div>
                  <div className="flex justify-between  px-5 pt-3 text-sm text-gray-900 font-bold">
                    <span>Total Incl. VAT</span>
                    <span>
                      EGP {totalPrice(Cart?.totalCartPrice, 25, shippingFee)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-x-auto  rounded-lg md:px-4 py-3">
                <div className="cash border rounded-lg p-4  text-sm">
                  <h2 className="mb-4 text-gray-700 font-bold text-lg">
                    Payment details
                  </h2>
                  <div className="flex items-center py-4 px-3">
                    <input
                      checked
                      id="default-radio-3"
                      type="radio"
                      value=""
                      name="payment-method"
                      className="w-4 h-4 accent-emerald-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="default-radio-3"
                      className="ms-3 text-sm font-medium text-gray-900 "
                    >
                      Debit/Credit Card
                    </label>
                    <span className="ms-auto">
                      <img src={card} alt="visa icon" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-x-auto  rounded-lg md:px-4 py-3">
                <div className="cash border rounded-lg p-4  text-sm">
                  <h2 className="mb-4 text-gray-700 font-bold text-lg">
                    Get It Tomorrow
                  </h2>
                  <p className="my-1">
                    Select this option to receive all your eligible express
                    items by tomorrow.
                  </p>
                </div>
              </div>

              <div className="relative overflow-x-auto  rounded-lg md:px-4 py-3">
                <div className="cash border rounded-lg p-4  text-sm">
                  <h2 className="mb-4 text-gray-700 font-bold text-lg">
                    Delivery address (Home)
                  </h2>
                  <p className="my-1">
                    4450 North Avenue Oakland, Nebraska, United States,
                  </p>
                  <p className="mb-2">P: 402-776-1106</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
