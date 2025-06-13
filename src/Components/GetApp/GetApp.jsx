import React from "react";
import photo from "../../assets/images/iphone.png";
import google from "../../assets/images/googleplay-btn-CwMI-V7g.svg";
import app from "../../assets/images/appstore-btn-TmL4qmIb.svg";

export default function GetApp() {
  return (
    <>
      <section className="mt-10">
        <div className="md:container">
          <div className="row items-center justify-between">
            <div className="md:w-[48%] w-full">
              <div className="img">
                <img
                  src={photo}
                  alt="iphone img"
                  className="lg:w-[58%] md:w-4/5 w-full md:ms-auto mx-auto"
                />
              </div>
            </div>
            <div className="md:w-[48%] w-full">
              <div className="text">
                <h2 className="text-3xl mb-2 font-semibold text-gray-800">
                  Get the FreshCart app
                </h2>
              </div>
              <p className="text-gray-600 font-medium text-[15px]">
                We will send you a link, open it on your phone to download the
                app.
              </p>
              <div className="flex mt-8">
                <div className="flex items-center">
                  <input
                    id="default-radio-1"
                    type="radio"
                    name="default-radio"
                    className="w-4 h-4 accent-emerald-600"
                    checked
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-600 "
                  >
                    Email
                  </label>
                </div>
                <div className="flex items-center ms-5">
                  <input
                    id="default-radio-2"
                    type="radio"
                    name="default-radio"
                    className="w-4 h-4 accent-emerald-600"
                    checked
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ms-2 text-sm font-medium text-gray-600 "
                  >
                    Phone
                  </label>
                </div>
              </div>
              <div className="input mt-5 flex ">
                <input
                  placeholder="Phone"
                  type="text"
                  className=" border border-gray-300 text-gray-500 text-sm rounded-lg block md:w-1/2 w-[55%] p-2.5 "
                />
                <button className="ms-2 inline-block px-5 rounded-lg md:hover:bg-emerald-700 transaition-all duration-300 text-white text-sm font-medium bg-emerald-600 ">
                  Share App link
                </button>
              </div>
              <p className="text-gray-500 text-[13px] font-medium mt-7">
                Download app from
              </p>
              <div className="logo flex gap-x-3 mt-4">
                <img src={app} alt="app store" className="lg:w-1/4 w-[40%]" />
                <img
                  src={google}
                  alt="google store"
                  className="lg:w-1/4 w-[40%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
