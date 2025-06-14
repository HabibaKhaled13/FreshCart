import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function CategoriesBar() {
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: false,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [brands, setBrands] = useState([]);
  function getBrands() {
    axios.get("https://ecommerce.routemisr.com/api/v1/categories").then((res) => {
      setBrands(res.data.data);
    });
  }

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <>
      <section className="mt-12 mb-20">
        <div className="container ">
        <div className="title mb-5">
            <h2 className="text-2xl font-semibold text-gray-800">
            Categories
            </h2>
          </div>
        <div className="slider-container">
          <Slider {...settings}>
           
            {brands.map((brand) => (
               <Link to="categories">
              <div key={brand._id} className="cursor-pointer">
                <img src={brand.image} alt="" className="w-full h-[200px] object-fill" />
                <h4 className="text-center mt-2">{brand.name}</h4>
              </div>
              </Link>
            ))}
          </Slider>
          </div>
        </div>
      </section>

    </>
  );
}
