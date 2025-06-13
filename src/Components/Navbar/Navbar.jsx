import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";
import { WishlistContext } from "../../Context/WishlistContext";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";
import { initFlowbite } from "flowbite";
import "flowbite";

export default function Navbar() {
  let { Login, setLogin } = useContext(UserContext);
  const { numOfCartItems, getLoggedUserProduct } = useContext(CartContext);
  let { numOfWishlistItems, wishListLogged } = useContext(WishlistContext);
  let navigate = useNavigate();

  async function getLoggedProduct() {
    let response = await getLoggedUserProduct();
    if (response.data.status === "success") {
     
    }
  }

  function signOut() {
    localStorage.removeItem("usertoken");
    setLogin(null);
    navigate("/login");
  }

  useEffect(() => {
    getLoggedProduct(), wishListLogged(), initFlowbite();
  }, []);

  return (
    <>
      <div className="bg-[#F0F3F2] py-2  ">
        <div className="container lg:w-[90%] md:w-[88%] mx-auto lg:px-14 flex md:justify-between justify-center">
          <p className="text-gray-500 font-medium text-sm">
            Super Value Deals - Save more with coupons
          </p>
          <form className="md:block hidden ">
            <div className="flex">
              <button
                id="states-button"
                data-dropdown-toggle="dropdown-states"
                className="shrink-0 z-10 inline-flex items-center text-sm font-medium text-center text-gray-500  border-gray-300 rounded-s-lg hover:bg-gray-200 "
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="h-3 me-2"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" width="14" height="12" rx="2" fill="white" />
                  <mask
                    id="mask0_12694_49953"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="15"
                    height="12"
                  >
                    <rect x="0.5" width="14" height="12" rx="2" fill="white" />
                  </mask>
                  <g mask="url(#mask0_12694_49953)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.5 0H0.5V0.8H14.5V0ZM14.5 1.6H0.5V2.4H14.5V1.6ZM0.5 3.2H14.5V4H0.5V3.2ZM14.5 4.8H0.5V5.6H14.5V4.8ZM0.5 6.4H14.5V7.2H0.5V6.4ZM14.5 8H0.5V8.8H14.5V8ZM0.5 9.6H14.5V10.4H0.5V9.6ZM14.5 11.2H0.5V12H14.5V11.2Z"
                      fill="#D02F44"
                    />
                    <rect x="0.5" width="6" height="5.6" fill="#46467F" />
                    <g filter="url(#filter0_d_12694_49953)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.83317 1.20005C1.83317 1.42096 1.68393 1.60005 1.49984 1.60005C1.31574 1.60005 1.1665 1.42096 1.1665 1.20005C1.1665 0.979135 1.31574 0.800049 1.49984 0.800049C1.68393 0.800049 1.83317 0.979135 1.83317 1.20005ZM3.1665 1.20005C3.1665 1.42096 3.01727 1.60005 2.83317 1.60005C2.64908 1.60005 2.49984 1.42096 2.49984 1.20005C2.49984 0.979135 2.64908 0.800049 2.83317 0.800049C3.01727 0.800049 3.1665 0.979135 3.1665 1.20005ZM4.1665 1.60005C4.3506 1.60005 4.49984 1.42096 4.49984 1.20005C4.49984 0.979135 4.3506 0.800049 4.1665 0.800049C3.98241 0.800049 3.83317 0.979135 3.83317 1.20005C3.83317 1.42096 3.98241 1.60005 4.1665 1.60005ZM5.83317 1.20005C5.83317 1.42096 5.68393 1.60005 5.49984 1.60005C5.31574 1.60005 5.1665 1.42096 5.1665 1.20005C5.1665 0.979135 5.31574 0.800049 5.49984 0.800049C5.68393 0.800049 5.83317 0.979135 5.83317 1.20005Z"
                        fill="url(#paint0_linear_12694_49953)"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_12694_49953"
                      x="1.1665"
                      y="0.800049"
                      width="4.6665"
                      height="5"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_12694_49953"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_12694_49953"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_12694_49953"
                      x1="1.1665"
                      y1="0.800049"
                      x2="1.1665"
                      y2="4.80005"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="#F0F0F0" />
                    </linearGradient>
                  </defs>
                </svg>
                English
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdown-states"
                className="z-10 hidden bg-white shadow-lg divide-y divide-gray-100 rounded-lg border w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="states-button"
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 "
                    >
                      <div className="inline-flex items-center">
                        <svg
                          aria-hidden="true"
                          className="h-3 me-2"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            width="14"
                            height="12"
                            rx="2"
                            fill="white"
                          />
                          <mask
                            id="mask0_12694_49953"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="15"
                            height="12"
                          >
                            <rect
                              x="0.5"
                              width="14"
                              height="12"
                              rx="2"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask0_12694_49953)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.5 0H0.5V0.8H14.5V0ZM14.5 1.6H0.5V2.4H14.5V1.6ZM0.5 3.2H14.5V4H0.5V3.2ZM14.5 4.8H0.5V5.6H14.5V4.8ZM0.5 6.4H14.5V7.2H0.5V6.4ZM14.5 8H0.5V8.8H14.5V8ZM0.5 9.6H14.5V10.4H0.5V9.6ZM14.5 11.2H0.5V12H14.5V11.2Z"
                              fill="#D02F44"
                            />
                            <rect
                              x="0.5"
                              width="6"
                              height="5.6"
                              fill="#46467F"
                            />
                            <g filter="url(#filter0_d_12694_49953)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.83317 1.20005C1.83317 1.42096 1.68393 1.60005 1.49984 1.60005C1.31574 1.60005 1.1665 1.42096 1.1665 1.20005C1.1665 0.979135 1.31574 0.800049 1.49984 0.800049C1.68393 0.800049 1.83317 0.979135 1.83317 1.20005ZM3.1665 1.20005C3.1665 1.42096 3.01727 1.60005 2.83317 1.60005C2.64908 1.60005 2.49984 1.42096 2.49984 1.20005C2.49984 0.979135 2.64908 0.800049 2.83317 0.800049C3.01727 0.800049 3.1665 0.979135 3.1665 1.20005ZM4.1665 1.60005C4.3506 1.60005 4.49984 1.42096 4.49984 1.20005C4.49984 0.979135 4.3506 0.800049 4.1665 0.800049C3.98241 0.800049 3.83317 0.979135 3.83317 1.20005C3.83317 1.42096 3.98241 1.60005 4.1665 1.60005ZM5.83317 1.20005C5.83317 1.42096 5.68393 1.60005 5.49984 1.60005C5.31574 1.60005 5.1665 1.42096 5.1665 1.20005C5.1665 0.979135 5.31574 0.800049 5.49984 0.800049C5.68393 0.800049 5.83317 0.979135 5.83317 1.20005Z"
                                fill="url(#paint0_linear_12694_49953)"
                              />
                            </g>
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_12694_49953"
                              x="1.1665"
                              y="0.800049"
                              width="4.6665"
                              height="5"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="1" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_12694_49953"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_12694_49953"
                                result="shape"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_12694_49953"
                              x1="1.1665"
                              y1="0.800049"
                              x2="1.1665"
                              y2="4.80005"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop offset="1" stopColor="#F0F0F0" />
                            </linearGradient>
                          </defs>
                        </svg>
                        English
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 "
                    >
                      <div className="inline-flex items-center">
                        <svg
                          aria-hidden="true"
                          className="h-3 me-2 rounded-[2px]"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-de"
                          viewBox="0 0 512 512"
                        >
                          <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                          <path d="M0 0h512v170.7H0z" />
                          <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                        </svg>
                        Germany
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
      <nav className="mt-5  md:border-0 pb-4 md:pb-0 ">
        <div className="container  md:w-11/12  mx-auto lg:px-14">
          <div className="flex items-center justify-between mb-2">
            <div className="md:w-[25%] w-full">
              <Link to="/">
                <img src={logo} alt="logo" className="lg:w-[75%] w-full" />
              </Link>
            </div>
            <div className="w-[65%] flex gap-2 justify-center mx-auto">
              <form className="w-[70%] lg:block hidden">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 "
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className=" block w-full py-[10px] ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white "
                    placeholder="Search for products"
                    required
                  />
                </div>
              </form>
              <button className=" text-gray-500 font-medium px-5 py-[10px]  lg:block hidden border-gray-300 rounded-lg border text-sm ">
                <i className="fa-solid fa-location-dot pe-2"></i>Location
              </button>
            </div>
            <div className="lg:w-1/4  md:w-1/5 w-[30%]">
              <div className="icons text-xl  text-gray-400 flex items-center justify-end md:gap-x-2 ">
                <div className="btn hidden lg:flex gap-x-1">
                {Login != null ? (
                  <>
                    {" "}
                    <Link to="/wishlist">
                      <i className="fa-regular fa-heart relative mx-1">
                        <span className="block h-[17px] leading-[17px] text-center absolute top-[-10px] right-[-9px] w-[18px] rounded-full text-white text-[10px] md:text-[9px] font-semibold  bg-emerald-600">
                          {numOfWishlistItems}
                        </span>
                      </i>
                    </Link>
                    <Link to="/cart">
                      <i className="fa-solid fa-cart-shopping relative mx-3">
                        <span className="block h-[17px] leading-[17px] text-center absolute top-[-10px] right-[-9px] w-[18px] rounded-full text-white text-[10px] md:text-[9px] font-semibold  bg-emerald-600">
                          {numOfCartItems}
                        </span>
                      </i>
                    </Link>

                              <button
                          onClick={signOut}
                          className="bg-emerald-600 py-[9px] lg:block hidden px-4 mx-3  text-center text-white border border-emerald-600 transition-all duration-200 font-medium rounded-md hover:bg-emerald-700 text-sm"
                        >
                          Logout
                          <i className=" ms-2 fa-solid fa-right-from-bracket"></i>
                        </button>
                  </>
                ) :   <>                   <Link
                            to="/login"
                              className=" lg:block py-[9px] px-4 hover:text-white text-center text-emerald-600 border border-emerald-600 transition-all duration-200 font-medium rounded-md hover:bg-emerald-600 text-sm"
                          >
                            Login
                            <i className="fa-solid fa-user text-sm ms-2"></i>
                          </Link>
                          <Link
                            to="/register"
                             className="bg-emerald-600 py-[9px] px-4 ms-1 text-center text-white border border-emerald-600 transition-all duration-200 font-medium rounded-md hover:bg-emerald-700 text-sm"
                          >
                            Sign up
                          </Link>
                        </>}
</div>
                <button
                  className="text-emerald-600 font-medium rounded-lg lg:hidden block text-2xl ms-5"
                  type="button"
                  data-drawer-target="drawer-navigation"
                  data-drawer-show="drawer-navigation"
                  aria-controls="drawer-navigation"
                >
                  <i className="fa-solid fa-bars-staggered "></i>
                </button>

                <div
                  id="drawer-navigation"
                  className="fixed top-0 left-0 z-40 w-[70%] h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800 "
                  tabIndex="-1"
                  aria-labelledby="drawer-navigation-label"
                >
                  <h5
                    id="drawer-navigation-label"
                    className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
                  >
                    <img src={logo} alt="logo" className="pt-1" />
                  </h5>
                  <button
                    type="button"
                    data-drawer-hide="drawer-navigation"
                    aria-controls="drawer-navigation"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 "
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evendd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                  </button>

                  <div className="inputs mt-5">
                    <form className="w-full">
                      <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only "
                      >
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
                          <svg
                            className="w-3 h-3 text-gray-500 "
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          className=" block w-full py-2.5 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white "
                          placeholder="Search for products"
                          required
                        />
                      </div>
                      <button className=" text-gray-500 font-medium px-5 py-2 w-full mt-3 border-gray-300 rounded-lg border text-sm ">
                        <i className="fa-solid fa-location-dot pe-2"></i>Pick
                        Location
                      </button>
                    </form>
                  </div>
                  <div className="py-4 overflow-y-auto">
                    {Login != null ?           <ul className="space-y-2 font-medium text-base ">
                      <li>
                        <Link
                          to="categories"
                          className="inline-block  py-2 mb-2 rounded-lg w-full text-sm text-center md:hover:bg-emerald-700 transaition-all duration-300 text-white  bg-emerald-600 "
                        >
                          <i className="fa-solid fa-bars-staggered me-2  text-white"></i>
                          All Categories
                        </Link>
                      </li>
                      <li className=" py-1 ">
                        <NavLink
                          to=""
                          className="flex items-center p-2 justify-center  hover:text-emerald-600  transition-all duration-200 text-gray-900 rounded-lg  group "
                        >
                          Home
                        </NavLink>
                      </li>

                      <li className=" py-1">
                        <NavLink
                          to="cart"
                          className="flex items-center p-2 justify-center  hover:text-emerald-600  transition-all duration-200 text-gray-900 rounded-lg  group "
                        >
                          Cart
                        </NavLink>
                      </li>

                      <li className=" py-1">
                        <NavLink
                          to="shop"
                          className="flex items-center p-2 justify-center  hover:text-emerald-600  transition-all duration-200 text-gray-900 rounded-lg  group "
                        >
                          Shop
                        </NavLink>
                      </li>

                      <li className=" py-1">
                        <NavLink
                          to="brands"
                          className="flex items-center p-2 justify-center hover:text-emerald-600  transition-all duration-200 text-gray-900 rounded-lg  group "
                        >
                          Brands
                        </NavLink>
                      </li>
           
                    </ul> :null}
          
                               {Login != null ? (
                        <button
                          onClick={signOut}
                          className="bg-emerald-600 py-[9px] px-4 mx-3 w-full text-center text-white border border-emerald-600 transition-all duration-200 font-medium rounded-md hover:bg-emerald-700 text-sm"
                        >
                          Logout{" "}
                          <i className=" ms-2 fa-solid fa-right-from-bracket"></i>
                        </button>
                      ) : (
                        <>
                          <Link
                            to="/login"
                            className="md:py-[9px] py-2  justify-center items-center flex text-emerald-600 hover:text-white border border-emerald-600 transition-all duration-200 font-medium rounded-md mt-5  hover:bg-emerald-600 text-sm"
                          >
                            Login
                            <i className="fa-solid fa-user text-sm ms-2"></i>
                          </Link>
                          <Link
                            to="/register"
                            className="bg-emerald-600 w-full py-2  text-white border border-emerald-700 transition-all duration-200 font-medium rounded-md inline-block hover:bg-emerald-700  text-center mt-3 text-sm"
                          >
                            Sign up
                          </Link>
                        </>
                      )}
                    <div
                      className=" w-full md:block md:w-auto"
                      id="navbar-default"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav
        className="bg-white text-gray-600  lg:block hidden border-b pb-2
      "
      >
        <div className=" flex flex-wrap items-center justify-between   p-2 container lg:w-11/12 md:w-11/12 mx-auto lg:px-14">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            {Login != null ? (
              <ul className="font-medium  text-[15px] flex flex-col  px-2 py-1 mt-4  rounded-lg  md:flex-row md:space-x-6 rtl:space-x-reverse items-center md:mt-0 ">
                <li>
                  <Link
                    to="categories"
                    className="inline-block px-6 py-2.5 rounded-lg md:hover:bg-emerald-700 transaition-all duration-300 text-white  bg-emerald-600 "
                  >
                    <i className="fa-solid fa-bars-staggered me-2 text-white"></i>
                    All Categories
                  </Link>
                </li>
                <li>
                  <NavLink
                    to=""
                    className="inline-block rounded-sm py-3 md:bg-transparent  transaition-all duration-300  "
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="cart"
                    className="inline-block rounded-sm py-3 md:bg-transparent  transaition-all duration-300  "
                  >
                    Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="shop"
                    className="inline-block rounded-sm py-3 md:bg-transparent  transaition-all duration-300  "
                  >
                    Shop
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="brands"
                    className="inline-block rounded-sm py-3 md:bg-transparent  transaition-all duration-300  "
                  >
                    Brands
                  </NavLink>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
}
