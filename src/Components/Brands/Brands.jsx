import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Brands() {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function getBrands() {
    setIsLoading(true);

    axios
      .get(`https://ecommerce.routemisr.com/api/v1/brands`)
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((res) => {
        res.data.data;
      });
  }
  useEffect(() => {
    getBrands();
  }, []);
  return (
    <>
      <section>
        <div className="container md:w-11/12 w-full mx-auto">
          <nav
            className="flex pb-3 ps-1 text-gray-700  mb-8"
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

              <li aria-current="page">
                <div className="flex items-center">
                  <span>/</span>
                  <span className="ms-1  font-medium text-gray-500 md:ms-2">
                    Brands
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="title mx-auto text-center md:w-[70%] mb-2 mt-12">
            <h1 className="text-gray-800 font-bold md:text-4xl text-3xl md:mb-6 mb-4">
              We work with best partners
            </h1>
            <p className="text-gray-500">
              While we are at the forefront of and specialize in design-build,
              we are very familiar with a number of delivery methods and are
              confident we can find the process that will best help you meet
              your goals.
            </p>
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
          ) : (
            <div className="row">
              {Data.map((products) => (
                <div className="md:w-1/5 w-1/4 md:p-2.5 p-2" key={products._id}>
                  <img
                    src={products?.image}
                    alt=""
                    className=" border border-emerald-600 rounded-2xl "
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
