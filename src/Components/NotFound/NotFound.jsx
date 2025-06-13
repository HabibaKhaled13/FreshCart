import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/error.svg";
export default function NotFound() {
  return (
    <>
      <section>
        <div className="container mx-auto md:py-0 py-3  lg:w-[73%]">
          <div className="flex flex-wrap md:justify-around md:items-center mt-7 mx-auto lg:h-[80vh] md:h-[65vh] h-[70vh] gap-y-0">
            <div className="lg:w-[53%] lg:text-left ">
              <h1 className="md:text-4xl text-2xl font-bold text-gray-800">Something’s wrong here...</h1>
              <p className="lg:w-[80%]  md:mt-5 mt-3 text-sm text-gray-500 font-semibold">
                We can’t find the page you’re looking for. Check out our help
                center or head back to home.
              </p>
              <div className="flex gap-x-3">
              <Link>
                <button className="py-3 px-5 font-semibold rounded-md mt-8 text-sm text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                  Help Center 
                </button>
              </Link>
             <Link to="/">
                <button className="py-3 px-5 font-semibold rounded-md mt-8 text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300">
                 Back to home
                </button>
              </Link>
            </div>
               </div>
            <div className="lg:w-[47%]">
              <img src={img} alt="" className="w-full" />
         
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
