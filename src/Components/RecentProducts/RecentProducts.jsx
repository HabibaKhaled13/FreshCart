import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { WishlistContext } from "../../Context/WishlistContext";

export default function RecentProducts() {
  const [Color, setColor] = useState(false);
  const [WishCheack, setWishCheack] = useState([]);
  const [CurrentId, setCurrentId] = useState(null);
  let { data, isLoading, error, isError } = useProduct();
  let { addProductToCart, getLoggedUserProduct } = useContext(CartContext);
  let { wishList, wishListLogged ,Wishlist} = useContext(WishlistContext);

  let test =  Wishlist.map((items)=>items.id)
  async function getwishlist(id) {
      setColor(true);
      setCurrentId(id)
    let response = await wishList(id);
    setWishCheack(await response.data.data)
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

  if (isLoading) {
    return (
      <div className="parent flex items-center justify-center w-full h-[80vh]">
        <span className="loader"></span>
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    );
  }

  if (isError) {
    return <h3>{error}</h3>;
  }

  const products = data?.data?.data.slice(0, 10);
  return (
    <>
      <section>
        <div className="md:container border-b pb-14">
          <div className="title ms-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              Popular Products
            </h2>
          </div>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className=" lg:w-1/5 md:w-1/4 w-1/2">
                <div className="allProduct border relative border-gray-200 rounded-lg m-2 p-3 hover:shadow-xl hover:border-green-500  transition-all duration-300 group">
                  <img src={product.imageCover} className="  w-full" alt="" />
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
                      className="text-white mt-4 mb-2 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm  md:px-3 px-2 py-1.5 text-center"
                    >
                      <i className="fa-solid fa-plus text-[11px]"></i> Add
                    </button>
                  </div>
             <div className="icons absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:block hidden transition-all duration-500">
             <div className="flex">
                    <Link
                      to={`productDetails/${product.id}/${product.category.name}`}
                    >
                      <i className="fa-solid fa-eye me-1 text-gray-500 text-xs lg:text-[13px] lg:p-3 p-2 rounded-md hover:bg-emerald-600 hover:text-white transition-all duration-200 bg-white shadow-lg"></i>
                    </Link>
                   
                     <i onClick={()=>getwishlist(product.id)} className={test.includes(product.id) || WishCheack.includes(product.id) ? "fa-solid fa-heart me-1  text-emerald-600 text-xs lg:text-[13px] lg:p-3 p-2 rounded-md cursor-pointer  hover:bg-emerald-600 hover:text-white transition-all duration-200 bg-white shadow-lg" : "fa-regular fa-heart me-1 cursor-pointer text-gray-500 text-xs lg:text-[13px] lg:p-3 p-2 rounded-md  hover:bg-emerald-600 hover:text-white transition-all duration-200 bg-white shadow-lg"}></i>
                     
             
            
                    <i className="fa-solid fa-right-left cursor-pointer text-gray-500 text-xs lg:text-[13px] lg:p-3 p-2 rounded-md  hover:bg-emerald-600 hover:text-white transition-all duration-200 bg-white shadow-lg"></i>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
