import React from "react";
import amazonPay from "../../assets/images/amazonpay.svg";
import american from "../../assets/images/american-express.svg";
import masterCard from "../../assets/images/mastercard.svg";
import payPal from "../../assets/images/payPal.svg";
import visa from "../../assets/images/visa.svg";
import googleApp from "../../assets/images/googleplay-btn-CwMI-V7g.svg";
import appStore from "../../assets/images/appstore-btn-TmL4qmIb.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#F0F3F2]">
        <div className="container mx-auto md:px-24 md:mt-12 py-12 mt-14">
          <div className="flex flex-wrap justify-between text-slate-500 text-sm gap-y-7">
            <div className="lg:w-[32%] w-full">
              <h2 className=" mb-2  hover:text-emerald-600 transition-all duration-200 text-gray-900 font-semibold text-[15px] ">
                Categories
              </h2>
              <div className="flex gap-x-4">
                <div className="w-1/2 ">
                  <ul className="  mt-3 cursor-pointer font-semibold ">
                    <li className="mb-2   hover:text-emerald-600 transition-all duration-200">Man Wear</li>
                    <li className="mb-2   hover:text-emerald-600 transition-all duration-200">Vegetables & Fruits</li>
                    <li className="mb-2   hover:text-emerald-600 transition-all duration-200">Breakfast & instant food</li>
                    <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Bakery & Biscuits</li>
                    <li className="mb-2   hover:text-emerald-600 transition-all duration-200">Baby care</li>
                    <li className="mb-2   hover:text-emerald-600 transition-all duration-200">Cleaning essentials</li>
                    <li className="mb-2   hover:text-emerald-600 transition-all duration-200">Personal care</li>
                  </ul>
                </div>
                <div className="w-1/2  ">
                  <ul className="  mt-3 cursor-pointer font-semibold">
                    <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Masala, oil & more</li>
                    <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Chicken, meat & fish</li>
                    <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Paan corner</li>
                    <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Pharma & wellness</li>
                    <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Pet care</li>
                    <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Home & office</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-[15%] md:w-1/5  w-1/2 ">
              <h2 className=" mb-2  text-gray-900 font-semibold text-[15px] ">
                Get to know us
              </h2>
              <ul className="  mt-3 cursor-pointer font-semibold">
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200"> Company</li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200"> About </li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200"> Blog</li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200"> Help</li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Center </li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200"> Our Value</li>
              </ul>
            </div>

            <div className="lg:w-[15%] md:w-1/5 w-1/2 ">
              <h2 className=" mb-2  text-gray-900 font-semibold text-[15px] ">
                For Consumers
              </h2>
              <ul className="  mt-3 cursor-pointer font-semibold">
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200"> Payments</li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Shipping </li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Product Returns</li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">FAQ</li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Shop Checkout </li>
              </ul>
            </div>

            <div className="lg:w-[15%] md:w-1/5 w-1/2 ">
              <h2 className=" mb-2  text-gray-900 font-semibold text-[15px] ">
                Become a Shopper
              </h2>
              <ul className="  mt-3 cursor-pointer font-semibold">
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Shopper Opportunities</li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Earnings </li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Ideas & Guides</li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">New Retailers</li>
              </ul>
            </div>

            <div className="lg:w-[15%] md:w-1/5 w-1/2  ">
              <h2 className=" mb-2   text-gray-900 font-semibold text-[15px] ">
                Freshcart programs
              </h2>
              <ul className="  mt-3 cursor-pointer font-semibold">
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Freshcart programs</li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Gift Cards</li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Promos & Coupons</li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Freshcart Ads</li>
                <li className="mb-2  hover:text-emerald-600 transition-all duration-200">Careers</li>
              </ul>
            </div>
          </div>

          <hr className="my-4 border-gray-200 sm:mx-auto  lg:my-4" />
          <div className="lg:flex lg:justify-between ">
            <div className="paymentMethods flex gap-x-2  items-center lg:mb-0 mb-5 lg:justify-start md:justify-center">
              <h3 className="md:text-[15px] font-semibold mb-0 whitespace-nowrap ">
                Payment Partners
              </h3>
              <div className="img-payment flex gap-x-3 ">
                <img src={amazonPay} alt="amazonPay payment method" />
                <img src={american} alt="american payment method" />
                <img src={masterCard} alt="masterCard payment method" />
                <img src={payPal} alt="payPal payment method" />
                <img src={visa} alt="visa payment method" />
              </div>
            </div>
            <div className="deliveriesApp flex lg:flex-nowrap flex-wrap items-center md:justify-end justify-center text-center  transition-all ">
 
               <div className="">  <h3 className="md:text-[15px] mb-2   font-semibold  whitespace-nowrap">
                  Get deliveries with FreshCart
                </h3></div>
              
          <div className="flex justify-center">     <img src={appStore} alt="app store app" className=" lg:w-[40%] w-1/3 me-2" />

                <img src={googleApp} alt="google play app" className=" lg:w-[40%] w-1/3" />
 </div>


           
            </div>
          </div>
          <hr className="my-4 border-gray-200 sm:mx-auto  lg:my-4" />
          <div className=" text-slate-500 mt-5 text-[13px]">
            © 2025 FreshCart eCommerce. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
