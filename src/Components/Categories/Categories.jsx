import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Categories() {
 
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
      <div className="container md:w-11/12 mx-auto">
             <nav
                      className="flex  ps-1 text-gray-700  mb-12"
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
                        <li className="inline-flex items-center">
                        <div className="flex items-center">
                        <span>/</span> 
                
                          <Link
                            to="/categories"
                            className="ms-1 inline-flex items-center font-medium text-gray-700 "
                          >
                           Categories
                          </Link>
                          </div>
                        </li>
                     
                      </ol>
                    </nav>
        <div className="title mb-5">
            <h2 className="text-2xl font-semibold text-gray-800">
            All Categories
            </h2>
          </div>
  <div className="row ">

            {brands.map((brand) => (
              
              <Link to="/shop" key={brand._id} className="cursor-pointer lg:w-[24%] md:w-[32%] w-1/2 p-2 md:p-4">
            
                <img src={brand.image} alt="" className="w-full lg:h-[255px] md:h-[210px] h-[180px] border border-emerald-600 shadow-sm  object-fill rounded-md" />
                <h4 className="text-center mt-2">{brand.name}</h4>
          
              </Link>
            ))}
        </div>
      
        </div>
      </section>



    </>
  );
}
