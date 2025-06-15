import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AllProducts() {
  const [Products, setProducts] = useState([]);
 
  function getProduct() {
  
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data.data)
       
      })
      .catch((res) => {});
  }
  useEffect(() => {
    getProduct(), [];
  });

  return (
    <>
    <section>
        <div className="title ms-2">
        <h2 className="text-2xl font-semibold text-gray-800">Popular Products</h2>
        </div>
        <div className="row">
        { Products.length > 0 ? Products.map((product) => (
          <div key={product.id} className=" lg:w-1/5 md:w-1/4 w-1/2">
            <div className="allProduct  border border-gray-200 rounded-lg m-2 hover:shadow-xl hover:border-green-500 p-3  transition-all duration-300">
              <img src={product.imageCover} className=" w-full" alt="" />
              <h3 className="font-semibold text-emerald-600 mt-2">{product.category.name}</h3>
              <p className="text-[14px] text-gray-800">{product.title.split(" ").slice(0,2).join(" ")}</p>
              <div className="price flex justify-between mt-2 text-sm">
                <span>
                  {product.price} EGP
                </span>
                <span className="text-gray-500 " ><i className="fas fa-star text-yellow-400"></i>{product.ratingsAverage}</span>
              </div>
              <button
                type="submit"
                className="text-white mt-4 mb-2 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center   ">
                  Add to Cart
           
              </button>
            </div>
       
          </div>
        )):<span className="loader"></span>}
      </div> 
    </section>
  
    </>
  );
}
