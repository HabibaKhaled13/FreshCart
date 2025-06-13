import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../Context/WishlistContext";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import img from "../../assets/images/cart.png";

export default function WishList() {
  let { wishListLogged, wishlistDelete, numOfWishlistItems } =
    useContext(WishlistContext);
  let { addProductToCart, getLoggedUserProduct } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [datawishlist, setdatawishlist] = useState([]);
  const [datacount, setdatacount] = useState([]);

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
  async function getWhishList() {
    setIsLoading(true);
    let response = await wishListLogged();

    if (response.data.status == "success") {
      setdatawishlist(response.data.data);
      setdatacount(response.data);
      setIsLoading(false);
    }
  }

  async function getRemoveWishlist(id) {
    let response = await wishlistDelete(id);
    if (response.data.status == "success") {
      setdatawishlist(response.data.data);
      getWhishList();
      toast.success("Product remove from you Wishlist");
    }
  }
  useEffect(() => {
    getWhishList();
  }, []);

  return (
    <>
      <section>
        <div className=" container md:w-11/12 mx-auto">
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
                    Wishlist
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="title mb-8">
            <h2 className="text-4xl font-bold mb-3 text-gray-700">
              My Wishlist
            </h2>

            <span className="text-slate-500 text-[15px] font-medium">
              There are {datacount.count} products in this wishlist.
            </span>
          </div>
          {isLoading ? (
            <div className="parent flex items-center justify-center w-full h-[80vh]">
              <span className="loader"></span>
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
          ) : datawishlist?.length > 0 ? (
            <div className="relative overflow-x-auto ">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className=" text-gray-700 border-b bg-gray-100  ">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-[14px] h-[14px] accent-emerald-600 bg-gray-100 border-gray-300 rounded-sm"
                        />
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {datawishlist.map((product, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b  border-gray-200 hover:bg-gray-50 "
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-[14px] h-[14px] accent-emerald-600 bg-gray-100 border-gray-300 rounded-sm"
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="p-6">
                        <img src={product.imageCover} className="w-14 " />
                      </td>

                      <td className="p-6 text-gray-800">{product.title}</td>
                      <td className="p-6 text-gray-800">{product.price} EPG</td>

                      <td className="p-6 ">
                        <span className="font-medium text-center text-white px-3 rounded-md text-xs py-1 inline-block bg-black">
                          In Stock
                        </span>
                      </td>
                      <td className="p-6">
                        <button
                          onClick={() => addToCart(product._id)}
                          className="font-medium text-white px-3 rounded-md text-xs py-2 bg-emerald-600"
                        >
                          Add to Cart
                        </button>
                      </td>
                      <td className=" p-6">
                        <button onClick={() => getRemoveWishlist(product._id)}>
                          <i className="fa-solid fa-trash-can font-medium text-red-600 text-base cursor-pointer ms-3"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="title  flex flex-col items-center justify-center text-center w-full mx-auto my-10">
              <img src={img} alt="cart emty" className="w-1/5 text-center " />
              <h2 className="text-2xl font-medium mb-3 mt-5 text-gray-800">
                Your cart is empty
              </h2>
              <p className="text-gray-500">
                Looks like you have not added anything to your cart, Go ahead &
                explore top categories.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
