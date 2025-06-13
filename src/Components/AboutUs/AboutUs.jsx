import React from "react";

export default function AboutUs() {
  return (
    <>
      <section className="mt-10">
        <div className="container border-t py-14">
          <div className="row justify-between  gap-y-10">
          <div className="lg:w-[22%] md:w-[48%] w-full">
              <div className="details">
                <i className="fa-regular fa-clock text-emerald-600 text-4xl "></i>
                <h2 className="text-gray-800 text-xl mt-5 mb-3 font-medium">
                  10 minute grocery now
                </h2>
                <p className="text-gray-500 text-sm font-medium">
                  Get your order delivered to your doorstep at the earliest from
                  FreshCart pickup stores near you.
                </p>
              </div>
            </div>
            <div className="lg:w-[22%] md:w-[48%] w-full">
              <div className="details">
                <i className="fa-solid fa-gift text-emerald-600 text-4xl "></i>
                <h2 className="text-gray-800 text-xl mt-5 mb-3 font-medium">
                  Best Prices & Offers
                </h2>
                <p className="text-gray-500 text-sm font-medium">
                  Cheaper prices than your local supermarket, great cashback
                  offers to top it off. Get best pricess & offers.
                </p>
              </div>
            </div>
            <div className="lg:w-[22%] md:w-[48%] w-full">
              <div className="details">
                <i className="fa-solid fa-box  text-emerald-600 text-4xl"></i>
                <h2 className="text-gray-800 text-xl mt-5 mb-3 font-medium">
                  Wide Assortment
                </h2>
                <p className="text-gray-500 text-sm font-medium">
                  Choose from 5000+ products across food, personal care,
                  household, bakery, veg and non-veg & other categories.
                </p>
              </div>
            </div>
            <div className="lg:w-[22%] md:w-[48%] w-full">
              <div className="details">
                <i className="fa-solid fa-arrows-rotate  text-emerald-600 text-4xl"></i>
                <h2 className="text-gray-800 text-xl mt-5 mb-3 font-medium">
                  Easy Returns
                </h2>
                <p className="text-gray-500 text-sm font-medium">
                  Not satisfied with a product? Return it at the doorstep & get
                  a refund within hours. No questions asked <span className="text-emerald-600">policy</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
