import React from "react";
import slider1 from "../../assets/images/slide-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";

import Slider from "react-slick";

export default function SliderHome() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <section>
        <div className="md:container md:mt-10 mx-auto ">
          <div className=" w-full rounded-lg mb-5">
            <Slider {...settings}>
              <div className="relative">
                <img
                  src={slider1}
                  alt=""
                  className="w-full lg:h-[85vh] md:h-[40vh] h-[70vh] object-cover rounded-lg"
                />
                <div className="absolute top-1/2 transform -translate-y-1/2 md:left-14 left-5 ">
                  <span className=" p-1  bg-yellow-400 font-medium text-[10px] text-center  inline-block text-gray-900  rounded-[4px]">
                    Opening Sale Discount 50%
                  </span>
                  <h2 className="lg:text-5xl md:text-[40px] text-3xl leading-tight  font-bold mt-6 lg:w-[60%]  md:w-[80%]  w-[90%]">
                    SuperMarket for Everything You Need
                  </h2>
                  <p className="text-slate-500 mt-5 mb-3 text-lg font-medium md:w-[65%] w-[90%]">
                    Introduced a new model for online grocery shopping and
                    convenient home delivery.
                  </p>

                  <button
                    type="submit"
                    className="text-white mt-4 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  px-6 py-2.5 text-center"
                  >
                    Shop Now
                    <i className="fa-solid fa-arrow-right text-[11px] ms-2 text-white"></i>
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={slider2}
                  alt=""
                    className="w-full lg:h-[85vh] md:h-[40vh] h-[70vh] object-cover rounded-lg"
                />
                <div className="absolute top-1/2 transform -translate-y-1/2 md:left-14 left-5 ">
                  <span className=" p-1  bg-yellow-400 font-medium text-[10px] text-center  inline-block text-gray-900  rounded-[4px]">
                    Free Shipping - orders over 299 EGP
                  </span>
                  
                  <h2 className="lg:text-5xl md:text-[40px] text-3xl leading-tight font-bold mt-6 lg:w-[60%]  md:w-[80%]  w-[90%]">
                    Free Shipping on orders over{" "}
                    <span className="text-emerald-600">299 EGP</span>
                  </h2>
                  <p className="text-slate-500 mt-5 mb-3 text-lg font-medium md:w-[65%] w-[90%]">
                    Free Shipping to First-Time Customers Only, After promotions
                    and discounts are applied.
                  </p>

                  <button
                    type="submit"
                    className="text-white mt-4 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  px-6 py-2.5 text-center"
                  >
                    Shop Now
                    <i className="fa-solid fa-arrow-right text-[11px] ms-2 text-white"></i>
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
