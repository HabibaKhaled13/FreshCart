import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import card from "../../assets/images/card.svg";
import cash from "../../assets/images/cash.svg";
import stripe from "../../assets/images/Stripe.png";
import { useFormik } from "formik";
import toast from "react-hot-toast";

export default function CheckOut() {
  let {  getLoggedUserProduct, checkOut,CartId } = useContext(CartContext);
  const [Cart, setCart] = useState(null);

  const [Time, setTime] = useState("tomorrow");
  const shippingFee = Time == "today" ? 35 : 0;

  function data(){
      toast.error("Please fill out the form first")
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
      handleSubmit(CartId, "http://localhost:5173"),
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
      <section>
        <div className="container  md:w-11/12 w-full mx-auto">
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
              <li className="inline-flex items-center">
                <span className="me-2">/</span>
                <Link
                  to="/cart"
                  className="inline-flex items-center font-medium text-emerald-600 hover:text-emerald-700"
                >
                  Cart
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span>/</span>
                  <span className="ms-1 font-medium text-gray-500 md:ms-2">
                    Checkout
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="title mb-4">
            <h2 className="text-4xl font-bold mb-3 text-gray-700">Checkout</h2>
          </div>
          <div className="row md:justify-between">
            <div className="md:w-3/5  w-full">
              <div className="address">
                <h2 className="text-xl bold mb-4 font-semibold">
                  Shipping Address
                </h2>
                <div className="flex justify-between flex-wrap">
                  <form  id="form"
                    className="px-7 py-6 border mt-4 rounded-lg md:w-3/5 w-full"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="title mb-5">
                      <h2 className="text-lg bold mb-4 font-semibold">
                        Add delivery address
                      </h2>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        value={formik.values.details}
                        type="text"
                        name="details"
                        autoComplete="off"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="floating_details"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_details"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Enter your details
                      </label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        value={formik.values.city}
                        type="text"
                        name="city"
                        autoComplete="off"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="floating_city"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_city"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Enter your city
                      </label>
                    </div>

                    <div className="relative z-0 w-full mb-4 group">
                      <input
                        value={formik.values.phone}
                        type="tel"
                        name="phone"
                        autoComplete="off"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="floating_phone"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                        placeholder=" "
                        required
                      />

                      <label
                        htmlFor="floating_phone"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Enter your phone
                      </label>
                    </div>
                    <div className="flex items-center mb-3 mt-3 pt-3 text-sm">
                      <input
                        id="default-radio-10"
                        type="checkbox"
                        value=""
                        name="home-defualt"
                        className="w-3 h-3 accent-emerald-600 "
                      />
                      <label
                        htmlFor="default-radio-10"
                        className="ms-2 font-medium text-gray-900 "
                      >
                        Leave at my door{" "}
                        <i className="fa-solid fa-circle-exclamation ms-1 text-gray-500 text-[13px] "></i>
                      </label>
                    </div>
                  </form>

                  <div className="defualt border mt-4 rounded-lg md:w-[38%] w-full">
                    <div className="flex items-center mb-3 mt-3 pt-3 px-4 ">
                      <input
                        id="default-radio-9"
                        type="checkbox"
                        value=""
                        name="home-defualt"
                        className="w-4 h-4 accent-emerald-600 "
                      />
                      <label
                        htmlFor="default-radio-9"
                        className="ms-2 font-medium text-gray-900 "
                      >
                        Address (Home)
                      </label>
                    </div>
                    <div className=" bg-slate-100 m-4 px-4 py-1 rounded-lg ">
                      <span className="text-xs pt-1">Deliver to:</span>
                      <p className="my-1">
                        4450 North Avenue Oakland, Nebraska, United States,
                      </p>
                      <p className="mb-2">P: 402-776-1106</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="your-order">
                <h2 className="text-xl font-semibold mt-10 mb-5">Your order</h2>
                <div className="border rounded-lg px-4">
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
                              {" "} {product.product.title}
                            
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
                  <div
                    className=" text-sm my-4
                shipment-time"
                  >
                    <h2 className="text-gray-900 font-semibold py-2 ps-1">
                      Get it
                      <span className="text-emerald-600 ms-1">
                        {Time == "today" ? "today" : "tomorrow"}
                      </span>
                    </h2>

                    <div className="flex items-center mb-3 mt-3 px-3">
                      <input
                        checked={Time == "tomorrow"}
                        id="default-radio-7"
                        type="radio"
                        value=""
                        onChange={() => setTime("tomorrow")}
                        name="shipment-time"
                        className="w-4 h-4 accent-emerald-600  "
                      />
                      <label
                        htmlFor="default-radio-7"
                        className="ms-2 font-medium text-gray-900 "
                      >
                        Get it{" "}
                        <span className="text-emerald-600 font-semibold">
                          Tomorrow
                        </span>
                      </label>
                      <span className="ms-auto text-emerald-600 font-semibold">
                        Free{" "}
                        <i className="fa-solid fa-circle-exclamation ms-1 text-gray-500 text-[15px]"></i>
                      </span>
                    </div>
                    <div className="flex items-center px-3">
                      <input
                        checked={Time == "today"}
                        onChange={() => setTime("today")}
                        id="default-radio-8"
                        type="radio"
                        value=""
                        name="shipment-time"
                        className="w-4 h-4 accent-emerald-600  "
                      />
                      <label
                        htmlFor="default-radio-8"
                        className="ms-2 font-medium text-gray-900 "
                      >
                        Get it{" "}
                        <span className="text-emerald-600 font-semibold">
                          Today
                        </span>
                      </label>
                      <span className="ms-auto">
                        + EGP 35.00{" "}
                        <i className="fa-solid fa-circle-exclamation ms-1 text-gray-500 text-[15px]"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="payment">
                <h2 className="text-xl font-semibold mt-10 mb-5">Payment</h2>
                <div className="payment border rounded-lg px-4">
                  <div className="flex items-center border-b py-4 px-3">
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
                  <div className="flex items-center border-b py-4 px-3">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="payment-method"
                      className="w-4 h-4 accent-emerald-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ms-3 text-sm font-medium text-gray-900 "
                    >
                      Stripe
                    </label>
                    <span className="ms-auto">
                      <img src={stripe} width={"41px"} alt="stipe logo" />
                    </span>
                  </div>

                  <div className="flex items-center border-b py-4 px-3">
                    <input
                      checked
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="payment-method"
                      className="w-4 h-4 accent-emerald-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ms-3 text-sm font-medium text-gray-900 "
                    >
                      Cash On Delivery
                    </label>
                    <span className="ms-auto">
                      <img src={cash} alt="stipe logo" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 w-full">
              <div className="relative overflow-x-auto  rounded-lg p-4">
                <h2 className="mb-4 text-gray-700 font-bold text-xl">
                  Order Summary
                </h2>
                <div className="cash border rounded-lg py-3 ">
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
           { !formik.values.details || !formik.values.city || !formik.values.phone  ?  <button onClick={()=>{data()}} form="form"
                  type="button"
                  className="text-white uppercase bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-semibold rounded-lg justify-center w-full flex  px-5 py-2.5 mt-5"
                >
                  Place Order
                </button>:           <button onClick={formik.handleSubmit} form="form"
                  type="button"
                  className="text-white uppercase bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-semibold rounded-lg justify-center w-full flex  px-5 py-2.5 mt-5"
                >
                  Place Order
                </button> }
       
                <p className="text-[13px] text-slate-500 font-medium mt-3">
                  By placing your order, you agree to be bound by the Freshcart
                  <span className="text-emerald-600">Terms of Service</span>
                  and.
                  <span className="text-emerald-600"> Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
