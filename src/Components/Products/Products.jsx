import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { WishlistContext } from "../../Context/WishlistContext";
import { initFlowbite } from "flowbite";
import "flowbite";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [WishCheack, setWishCheack] = useState([]);
  const [CurrentId, setCurrentId] = useState(null);
  const [Color, setColor] = useState(false);

  let { data, isLoading, error, isError } = useProduct();
  const products = Array.isArray(data?.data?.data) ? data.data.data : [];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginate = (pageNumber) => (
    setCurrentPage(pageNumber), window.scrollTo({ top: 0, behavior: "smooth" })
  );

  let { addProductToCart, getLoggedUserProduct } = useContext(CartContext);
  let { wishList, wishListLogged, Wishlist } = useContext(WishlistContext);
  let test = Wishlist.map((items) => items.id);

  async function getwishlist(id) {
    setColor(true);
    setCurrentId(id);
    let response = await wishList(id);
    setWishCheack(await response.data.data);
    console.log(response);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      wishListLogged();
    } else {
      toast.error(response.data.message);
    }
  }

  async function addToCart(id) {
    let response = await addProductToCart(id);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      getLoggedUserProduct();
    } else {
      toast.error(response.data.message);
    }
    console.log(response);
  }

  useEffect(() => {
    initFlowbite();
  }, []);

  if (isLoading) {
    return (
      <div className="parent flex items-center justify-center w-full h-[80vh]">
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="container md:w-11/12 mx-auto">
          <nav
            className="flex  ps-1 text-gray-700  mb-8"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center font-medium text-emerald-600 hover:text-emerald-700"
                >
                  Home
                </Link>
              </li>
              <li className="inline-flex items-center">
                <div className="flex items-center">
                  <span>/</span>

                  <Link
                    to="/shop"
                    className="ms-1 inline-flex items-center font-medium text-gray-700 "
                  >
                    Shop
                  </Link>
                </div>
              </li>
            </ol>
          </nav>

          <div className="row justify-between">
            <div className="md:w-1/5 w-full">
              <div className="filter md:block hidden">
                <div className="categories">
                  <h2 className="text-lg font-medium mb-3 text-gray-800">
                    Categories
                  </h2>
                  <ul className="cursor-pointer">
                    <li className="flex items-center justify-between border-b py-2.5 hover:text-emerald-600 transition-all duration-200 text-gray-700 font-semibold text-sm">
                      Men's Fashion
                      <i className="text-[10px] fa-solid fa-angle-right"></i>
                    </li>
                    <li className="flex items-center justify-between border-b py-2.5 hover:text-emerald-600 transition-all duration-200 text-gray-700 font-semibold text-sm">
                      Women's Fashion
                      <i className="text-[10px] fa-solid fa-angle-right"></i>
                    </li>
                    <li className="flex items-center justify-between border-b py-2.5 hover:text-emerald-600 transition-all duration-200 text-gray-700 font-semibold text-sm">
                      Super Market
                      <i className="text-[10px] fa-solid fa-angle-right"></i>
                    </li>
                    <li className="flex items-center justify-between border-b py-2.5 hover:text-emerald-600 transition-all duration-200 text-gray-700 font-semibold text-sm">
                      Baby & Toys
                      <i className="text-[10px] fa-solid fa-angle-right"></i>
                    </li>
                    <li className="flex items-center justify-between border-b py-2.5 hover:text-emerald-600 transition-all duration-200 text-gray-700 font-semibold text-sm">
                      Music
                      <i className="text-[10px] fa-solid fa-angle-right"></i>
                    </li>
                    <li className="flex items-center justify-between border-b py-2.5 hover:text-emerald-600 transition-all duration-200 text-gray-700 font-semibold text-sm">
                      Electronics
                      <i className="text-[10px] fa-solid fa-angle-right"></i>
                    </li>
                  </ul>
                </div>
                <div className="stores mt-12">
                  <h2
                    className="text-gray-800
                text-lg font-medium mb-3"
                  >
                    Stores
                  </h2>
                  <form className="max-w-md mx-auto mb-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none"></div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg "
                        placeholder="Search by store"
                        required
                      />
                    </div>
                  </form>

                  <div className="flex items-center mb-4 text-sm">
                    <input
                      checked
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ms-2 font-medium text-gray-500"
                    >
                      Defacto
                    </label>
                  </div>
                  <div className="flex items-center mb-4 text-sm">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 font-medium text-gray-500"
                    >
                      SAMSUNG
                    </label>
                  </div>
                  <div className="flex items-center mb-4 text-sm">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 font-medium text-gray-500"
                    >
                      Canon
                    </label>
                  </div>
                  <div className="flex items-center mb-4 text-sm">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 font-medium text-gray-500"
                    >
                      Lc Wakiki
                    </label>
                  </div>
                  <div className="flex items-center mb-4 text-sm">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 font-medium text-gray-500"
                    >
                      Sony
                    </label>
                  </div>
                </div>

           

                <div className="ratnig mt-12">
                  <h2
                    className="text-gray-800
                text-lg font-medium mb-3"
                  >
                    Rating
                  </h2>
                  <div className="flex items-center mb-4 text-sm">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                    />
                    <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                    <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                  </div>
                  <div className="flex items-center mb-4 text-sm">
                    <input
                      checked
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                    />
                    <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                    <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                  </div>
                  <div className="flex items-center mb-4 text-sm">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                    />
                    <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                    <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                  </div>
                  <div className="flex items-center mb-4 text-sm">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[14px] h-[14px] accent-redde-600   bg-gray-100 border-gray-300 rounded-xl"
                    />
                    <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                    <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                  </div>
                  <div className="flex items-center mb-4 text-sm">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                    />
                    <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                    <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                    <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[75%] w-full">
              <div className="bar flex justify-between items-center md:flex-nowrap flex-wrap">
                <div className="title ">
                  <h2 className="text-gray-600 md:mb-0 mb-4 ">
                    <span className="font-semibold text-gray-800 me-1">40</span>
                    Products found
                  </h2>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-list-ul me-3 text-lg text-emerald-600"></i>
                  <div className="text-center block ">
                    <button
                      className="text-gray-600 md:hidden border-gray-300 border font-medium rounded-md text-sm px-5 py-2 "
                      type="button"
                      data-drawer-target="drawer-navbar"
                      data-drawer-show="drawer-navbar"
                      aria-controls="drawer-navbar"
                    >
                      <i className="fa-solid fa-filter me-2"></i>Filter
                    </button>
                  </div>

                  <div
                    id="drawer-navbar"
                    className="fixed top-0 left-0 z-40 w-full h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
                    tabIndex="-1"
                    aria-labelledby="drawer-navbar-label"
                  >
                    <h5
                      id="drawer-navbar-label"
                      className="text-base font-semibold text-gray-500  dark:text-gray-400"
                    >
                      Filter
                    </h5>
                    <button
                      type="button"
                      data-drawer-hide="drawer-navigation"
                      aria-controls="drawer-navigation"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close menu</span>
                    </button>
                    <div className="py-4 overflow-y-auto">
                      <div className="categories">
                        <h2 className="text-lg font-medium mb-3 text-gray-800">
                          Categories
                        </h2>
                        <ul>
                          <li className="flex items-center justify-between border-b py-2.5 hover:text-emerald-600 transition-all duration-200 text-gray-700 font-semibold text-sm">
                            Men's Fashion
                            <i className="text-[10px] fa-solid fa-angle-right"></i>
                          </li>
                          <li className="flex items-center justify-between border-b py-2.5 hover:text-emerald-600 transition-all duration-200 text-gray-700 font-semibold text-sm">
                            Women's Fashion
                            <i className="text-[10px] fa-solid fa-angle-right"></i>
                          </li>
                          <li className="flex items-center justify-between border-b py-2.5 hover:text-emerald-600 transition-all duration-200 text-gray-700 font-semibold text-sm">
                            Super Market
                            <i className="text-[10px] fa-solid fa-angle-right"></i>
                          </li>
                          <li className="flex items-center justify-between border-b py-2.5 hover:text-emerald-600 transition-all duration-200 text-gray-700 font-semibold text-sm">
                            Baby & Toys
                            <i className="text-[10px] fa-solid fa-angle-right"></i>
                          </li>
                          <li className="flex items-center justify-between border-b py-2.5 hover:text-emerald-600 transition-all duration-200 text-gray-700 font-semibold text-sm">
                            Music
                            <i className="text-[10px] fa-solid fa-angle-right"></i>
                          </li>
                          <li className="flex items-center justify-between border-b py-2.5 hover:text-emerald-600 transition-all duration-200 text-gray-700 font-semibold text-sm">
                            Electronics
                            <i className="text-[10px] fa-solid fa-angle-right"></i>
                          </li>
                        </ul>
                      </div>
                      <div className="stores mt-8">
                        <h2
                          className="text-gray-800
                text-lg font-medium mb-3"
                        >
                          Stores
                        </h2>
                        <form className="max-w-md mx-auto mb-4">
                          <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none"></div>
                            <input
                              type="search"
                              id="default-search"
                              className="block w-full p-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg "
                              placeholder="Search by store"
                              required
                            />
                          </div>
                        </form>

                        <div className="flex items-center mb-4 text-sm">
                          <input
                            checked
                            id="checked-checkbox"
                            type="checkbox"
                            value=""
                            className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                          />
                          <label
                            htmlFor="checked-checkbox"
                            className="ms-2 font-medium text-gray-500"
                          >
                            Defacto
                          </label>
                        </div>
                        <div className="flex items-center mb-4 text-sm">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                          />
                          <label
                            htmlFor="default-checkbox"
                            className="ms-2 font-medium text-gray-500"
                          >
                            SAMSUNG
                          </label>
                        </div>
                        <div className="flex items-center mb-4 text-sm">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                          />
                          <label
                            htmlFor="default-checkbox"
                            className="ms-2 font-medium text-gray-500"
                          >
                            Canon
                          </label>
                        </div>
                        <div className="flex items-center mb-4 text-sm">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                          />
                          <label
                            htmlFor="default-checkbox"
                            className="ms-2 font-medium text-gray-500"
                          >
                            Lc Wakiki
                          </label>
                        </div>
                        <div className="flex items-center mb-4 text-sm">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                          />
                          <label
                            htmlFor="default-checkbox"
                            className="ms-2 font-medium text-gray-500"
                          >
                            Sony
                          </label>
                        </div>
                      </div>

                    

                      <div className="ratnig mt-8">
                        <h2
                          className="text-gray-800
                text-lg font-medium mb-3"
                        >
                          Rating
                        </h2>
                        <div className="flex items-center mb-4 text-sm">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                          />
                          <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                          <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        </div>
                        <div className="flex items-center mb-4 text-sm">
                          <input
                            checked
                            id="checked-checkbox"
                            type="checkbox"
                            value=""
                            className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                          />
                          <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                          <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        </div>
                        <div className="flex items-center mb-4 text-sm">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                          />
                          <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                          <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        </div>
                        <div className="flex items-center mb-4 text-sm">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                          />
                          <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                          <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        </div>
                        <div className="flex items-center mb-4 text-sm">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                          />
                          <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                          <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                          <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        </div>
                      </div>
                    </div>
                  </div>
             <form>
  <select
    id="sort"
    className="appearance-none font-medium border lg:mx-0 mx-3 border-gray-300 text-gray-900 text-sm rounded-md block w-full px-2.5 py-2 bg-white focus:ring-emerald-600 focus:border-emerald-600"
  >
    <option selected className="lg:text-sm  text-xs">Sort by: Featured</option>
    <option value="low" className="lg:text-sm text-xs">Price: Low to High</option>
    <option value="high" className="lg:text-sm  text-xs">Price: High to Low</option>
    <option value="date" className="lg:text-sm  text-xs">Release Date</option>
    <option value="rating" className=" lg:text-sm text-xs">Avg. Rating</option>
  </select>
</form>

                </div>
              </div>
              <div className="row">
                {currentProducts.map((product) => (
                  <div key={product.id} className=" md:w-1/3 lg:w-1/4 w-1/2">
                    <div className="allProduct border relative border-gray-200 rounded-lg m-2 p-3 hover:shadow-xl hover:border-green-500  transition-all duration-300 group">
                      <img
                        src={product.imageCover}
                        className="  w-full"
                        alt=""
                      />
                      <h3 className="text-slate-500 mt-2 text-[12px] mb-1">
                        {product.category.name}
                      </h3>
                      <p className=" font-medium text-[14px]">
                        {product.title.split(" ").slice(0, 2).join(" ")}
                      </p>
                      <span className="text-gray-500 text-[12px]">
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star-half-stroke  text-yellow-400"></i>
                        {product.ratingsAverage}
                      </span>

                      <div className="price flex justify-between font-medium text-sm items-center">
                        <span className=" mt-2">{product.price} EGP</span>

                        <button
                          onClick={() => addToCart(product.id)}
                          type="submit"
                          className="text-white mt-4 mb-2 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm  md:px-3.5 px-2 py-1.5 text-center"
                        >
                          <i className="fa-solid fa-plus text-[11px]"></i> Add
                        </button>
                      </div>
                      <div className="icons absolute top-[40%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  group-hover:block hidden transition-all duration-500">
                        <div className="flex">
                          <Link
                            to={`/productDetails/${product.id}/${product.category.name}`}
                          >
                            <i className="fa-solid fa-eye me-[2px] text-gray-500 text-xs lg:text-[13px]  lg:p-2.5 p-2 rounded-md hover:bg-emerald-600 hover:text-white transition-all duration-200 bg-white shadow-lg"></i>
                          </Link>
                          <i
                            onClick={() => getwishlist(product.id)}
                            className={
                              test.includes(product.id) ||
                              WishCheack.includes(product.id)
                                ? "fa-solid fa-heart me-[2px]  cursor-pointer  text-emerald-600 text-xs lg:text-[13px] lg:p-2.5 p-2 rounded-md  hover:bg-emerald-600 hover:text-white transition-all duration-200 bg-white shadow-lg"
                                : "fa-regular fa-heart me-[2px] cursor-pointer  text-gray-500 text-xs lg:text-[13px] lg:p-2.5 p-2 rounded-md  hover:bg-emerald-600 hover:text-white transition-all duration-200 bg-white shadow-lg"
                            }
                          ></i>
                          <i className="fa-solid fa-right-left cursor-pointer text-gray-500 text-xs lg:text-[13px]  lg:p-2.5 p-2 rounded-md  hover:bg-emerald-600 hover:text-white transition-all duration-200 bg-white shadow-lg"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-8 justify-center text-base mt-7">
                  <li>
                    <button
                      onClick={() =>
                        paginate(currentPage > 1 ? currentPage - 1 : 1)
                      }
                      className="flex items-center justify-center px-3.5 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg
                        className="w-2.5 h-2.5 rtl:rotate-180"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                    </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index}>
                      <button
                        onClick={() => paginate(index + 1)}
                        className={`flex items-center justify-center px-3.5 h-10 leading-tight border ${
                          currentPage === index + 1
                            ? "text-emerald-600 border-emerald-600 bg-blue-50"
                            : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        }`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}

                  <li>
                    <button
                      onClick={() =>
                        paginate(
                          currentPage < totalPages
                            ? currentPage + 1
                            : totalPages
                        )
                      }
                      className="flex items-center justify-center px-3.5 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg
                        className="w-2.5 h-2.5 rtl:rotate-180"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
