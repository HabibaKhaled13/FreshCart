import React from "react";
import RecentProducts from "../RecentProducts/RecentProducts";
import SliderHome from "../SliderHome/SliderHome";
import CategoriesBar from "../CategoriesBar/CategoriesBar";
import GetApp from "../GetApp/GetApp";
import AboutUs from "../AboutUs/AboutUs";
import SecondSliderHome from "../SecondSliderHome/SecondSliderHome";

export default function Home() {
  return (
    <>
      <div className=" md:w-11/12 mx-auto">
        <SliderHome />
        <CategoriesBar />
        <SecondSliderHome/>
        <RecentProducts />
        <GetApp/>
        <AboutUs/>
      </div>
    </>
  );
}
