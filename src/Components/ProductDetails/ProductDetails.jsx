import React, { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CartContext } from "../../Context/CartContext";
import axios from "axios";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../ProductDetails/ProductDetails.module.css";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import img1 from "../../assets/images/avatar-12.jpg";
import img2 from "../../assets/images/avatar-10.jpg";
import toast from "react-hot-toast";
import { WishlistContext } from "../../Context/WishlistContext";
import { initFlowbite } from "flowbite";
import "flowbite";

export default function ProductDetails() {
  let { addProductToCart,getLoggedUserProduct } = useContext(CartContext);
  const [WishCheack, setWishCheack] = useState([]);
  const [Color, setColor] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [relatedProducts, setrelatedProducts] = useState([]);
  const [Product, setProduct] = useState(null);
  let { id, category } = useParams();

  let { wishList, wishListLogged, Wishlist } = useContext(WishlistContext);

  let test = Wishlist.map((items) => items.id);
  async function getwishlist(id) {
    setColor(true);
    setCurrentId(id);
    let response = await wishList(id);
    setWishCheack(await response.data.data);
    console.log(response);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      wishListLogged();
    } else {
      toast.error(response.data.message);
    }
  }

  function getData(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
      })
      .catch((res) => {
        console.log("error in req");
      });
  }
  function getAllProducts() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`).then((res) => {
      let related = res.data.data.filter(
        (product) => product.category.name == category
      );
      setrelatedProducts(related);
    });
  }
  async function addToCart(id) {
    let response = await addProductToCart(id);
    if (response.data.status == "success") {
      toast.success(response.data.message);
       getLoggedUserProduct()
    } else {
      toast.error(response.data.message);
    }
    console.log(response);
  }
  useEffect(() => {
    getData(id);
    getAllProducts();
    initFlowbite();
  }, [category, id]);

  return (
    <>
      <section>
        <div className="container md:w-11/12 md:px-14">
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
              <li className="inline-flex items-center">
                <div className="flex items-center">
                  <span>/</span>

                  <Link
                    to="/shop"
                    className="ms-1 inline-flex items-center font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    Shop
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span>/</span>
                  <span className="ms-1 font-medium text-gray-500 md:ms-2">
                    {Product?.category.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="row justify-between md:gap-y-0 gap-y-14">
            <div className="md:w-[40%] w-full cursor-pointer">
              <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 mb-3"
                loop={true}
              >
                <SwiperSlide>
                  <img src={Product?.imageCover} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Product?.images[0]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Product?.images[1]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Product?.images[2]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Product?.images[3]} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={Product?.imageCover} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Product?.images[0]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Product?.images[1]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Product?.images[2]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Product?.images[3]} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="md:w-1/2 md:mt-14">
              <span className="text-emerald-600 font-semibold">
                {Product?.category.name}
              </span>
              <h1 className="text-4xl text-gray-800 font-bold mt-6">
                {Product?.title}
              </h1>
              <div className="rating mt-3">
                <span className="text-yellow-400 text-xs me-2">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </span>
                <span className="text-gray-500 ">
                  {Product?.ratingsAverage}
                </span>
              </div>
              <p className="mt-3 mb-6 text-xl font-bold">
                {Product?.price} EGP
              </p>
              <hr />

              <button
                onClick={() => addToCart(Product.id)}
                className="text-white w-full bg-emerald-700 my-8  hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-bold rounded-lg transaition-all duration-200 text-sm px-4 py-2.5 "
              >
                <i class="fa-solid fa-cart-shopping me-1"></i> Add to Cart
              </button>

              <hr />

              <div class="relative overflow-x-auto ms-5 mt-4">
                <table class="w-full text-sm text-left text-gray-500 ">
                  <tbody>
                    <tr class="bg-white  border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Product Code:
                      </th>
                      <td class="px-6 py-4">FBB00255</td>
                    </tr>
                    <tr class="bg-white border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Availability:
                      </th>
                      <td class="px-6 py-4">In Stock</td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Type:
                      </th>
                      <td class="px-6 py-4">{Product?.category.slug}</td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Shipping:
                      </th>
                      <td class="px-6 py-4">
                        01 day shipping. ( Free pickup today)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mb-4 border-b border-gray-200 mt-10">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4  border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Reviews
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4  border-b-2 rounded-t-lg  "
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Product Details
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2   rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Information
                </button>
              </li>

              <li role="presentation">
                <button
                  className="inline-block p-4  border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  Seller Info
                </button>
              </li>
            </ul>
          </div>
          <div id="default-tab-content">
            <div
              className="hidden p-4 rounded-lg "
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <div className="flex justify-between flex-wrap gap-y-10 md:gap-y-0">
                <div className="md:w-[30%] w-full">
                  <h2 className="text-xl text-gray-800 font-semibold mb-2">
                    Customer reviews
                  </h2>
                  <span className="text-yellow-400 text-xs me-2">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </span>
                  <span className="text-sm text-gray-600 font-semibold">
                    {Product?.ratingsAverage} out of 5
                  </span>
                  <div className="flex items-center  mt-3 ">
                    <span className="me-2 text-sm font-medium text-slate-400 ">
                      5
                    </span>

                    <div className="w-full bg-gray-200 rounded-full h-1.5 ] ">
                      <div
                        className="bg-yellow-400  h-1.5 rounded-full "
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <span className="ms-2 text-[14px] font-medium text-slate-400 ">
                      75%
                    </span>
                  </div>
                  <div className="flex items-center mt-2 ">
                    <span className="me-2 text-sm font-medium text-slate-400 ">
                      4
                    </span>

                    <div className="w-full bg-gray-200 rounded-full h-1.5 ] ">
                      <div
                        className="bg-yellow-400  h-1.5 rounded-full "
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                    <span className="ms-2 text-[14px] font-medium text-slate-400 ">
                      45%
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="me-2 text-sm font-medium text-slate-400 ">
                      3
                    </span>

                    <div className="w-full bg-gray-200 rounded-full h-1.5 ] ">
                      <div
                        className="bg-yellow-400  h-1.5 rounded-full "
                        style={{ width: "27%" }}
                      ></div>
                    </div>
                    <span className="ms-2 text-[14px] font-medium text-slate-400 ">
                      27%
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="me-2 text-sm font-medium text-slate-400 ">
                      2
                    </span>

                    <div className="w-full bg-gray-200 rounded-full h-1.5 ] ">
                      <div
                        className="bg-yellow-400  h-1.5 rounded-full "
                        style={{ width: "11%" }}
                      ></div>
                    </div>
                    <span className="ms-2 text-[14px] font-medium text-slate-400 ">
                      11%
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="me-2 text-sm font-medium text-slate-400 ">
                      1
                    </span>

                    <div className="w-full bg-gray-200 rounded-full h-1.5 ] ">
                      <div
                        className="bg-yellow-400  h-1.5 rounded-full "
                        style={{ width: "7%" }}
                      ></div>
                    </div>
                    <span className="ms-2 text-[14px] font-medium text-slate-400 ">
                      7%
                    </span>
                  </div>
                  <div className="data mt-6">
                    {" "}
                    <h2 className="text-xl text-gray-800 font-semibold mb-2">
                      Review this product
                    </h2>
                    <p className="text-gray-700 text-sm font-medium">
                      Share your thoughts with other customers.
                    </p>
                    <button className="w-full py-2.5 mt-5 border hover:bg-slate-200 transition-all duration-200 rounded-md text-sm text-gray-700 font-medium ">
                      Write the Review
                    </button>
                  </div>
                </div>
                <div className="md:w-3/5 w-full">
                  <h2 className="text-xl text-gray-800 font-semibold mb-2">
                    Reviews
                  </h2>
                  <div className="review border-b pb-7 my-10">
                    <div className="flex justify-between">
                      <div className="md:w-[9%] w-[12%]">
                        <img
                          src={img1}
                          alt=""
                          className="w-full rounded-full"
                        />
                      </div>
                      <div className="md:w-[88%] w-[85%]">
                        <h4 className="text-gray-800 font-medium text-[15px]">
                          Shankar Subbaraman
                        </h4>
                        <p className="text-slate-400 text-xs font-medium mt-1 mb-4">
                          16 March 2025
                        </p>
                        <span className="text-yellow-400 text-xs me-2">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span className="text-slate-800 text-sm font-bold">
                          Need to recheck the weight at delivery point
                        </span>

                        <p className="text-gray-700 mt-3  text-[15px] ">
                          Product quality is good. But, weight seemed less than
                          1kg. Since it is being sent in open package, there is
                          a possibility of pilferage in between. FreshCart sends
                          the veggies and fruits through sealed plastic covers
                          and Barcode on the weight etc.
                        </p>
                        <div className="icons text-slate-400 flex justify-end mt-7 text-sm">
                          <span className="me-5 font-medium ">
                            <i class="fa-solid fa-thumbs-up me-2"></i>Helpful
                          </span>
                          <span className="font-medium">
                            <i class="fa-solid fa-flag me-2"></i>Report abuse
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review border-b pb-7 my-10">
                    <div className="flex justify-between">
                      <div className="md:w-[9%] w-[12%]">
                        <img
                          src={img2}
                          alt=""
                          className="w-full rounded-full"
                        />
                      </div>
                      <div className="md:w-[88%] w-[85%]">
                        <h4 className="text-gray-800 font-medium text-[15px]">
                          Robert Thomas
                        </h4>
                        <p className="text-slate-400 text-xs font-medium mt-1 mb-4">
                          30 December 2024
                        </p>
                        <span className="text-yellow-400 text-xs me-2">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span className="text-slate-800 text-sm font-bold">
                          Need to recheck the weight at delivery point
                        </span>

                        <p className="text-gray-700 mt-3  text-[15px] ">
                          Everytime i ordered from fresh i got greenish yellow
                          bananas just like i wanted so go for it , its happens
                          very rare that u get over riped ones.
                        </p>
                        <div className="icons text-slate-400 flex justify-end mt-7 text-sm">
                          <span className="me-5 font-medium ">
                            <i class="fa-solid fa-thumbs-up me-2"></i>Helpful
                          </span>
                          <span className="font-medium">
                            <i class="fa-solid fa-flag me-2"></i>Report abuse
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="py-3 w-full lg:w-[40%]  md:w-[60%]  mt-2 border hover:bg-slate-200 transition-all duration-200 rounded-md text-sm text-gray-700 font-medium ">
                    Read More Review
                  </button>
                </div>
              </div>
            </div>

            <div
              className="hidden p-4 rounded-lg"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <div className="relative overflow-x-auto ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <tbody>
                    <tr className="even:bg-white  odd:bg-gray-50  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Product Name
                      </th>
                      <td className="px-6 py-4">{Product?.category.name}</td>
                    </tr>
                    <tr className="even:bg-white  odd:bg-gray-50  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Weight
                      </th>
                      <td className="px-6 py-4">60-85 kilo</td>
                    </tr>
                    <tr className="even:bg-white  odd:bg-gray-50  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Brand Name
                      </th>
                      <td className="px-6 py-4">{Product?.brand.name}</td>
                    </tr>
                    <tr className="even:bg-white  odd:bg-gray-50  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Title
                      </th>
                      <td className="px-6 py-4">{Product?.title}</td>
                    </tr>
                    <tr className="even:bg-white  odd:bg-gray-50  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Sold
                      </th>
                      <td className="px-6 py-4">{Product?.sold}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="hidden p-4 rounded-lg "
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <h2 className="text-xl text-gray-800 font-semibold">
                Description
              </h2>
              <p className="mt-3 text-sm text-gray-700">
                {Product?.description}
              </p>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50"
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <p className="text-sm text-gray-500 ">
                <strong className="font-medium text-gray-800 ">
                  No data showing
                </strong>
              </p>
            </div>
          </div>
          <div className="related-product mt-14">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Related Products
            </h2>
            <Swiper
              slidesPerView={2}
              spaceBetween={5}
              freeMode={true}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {relatedProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="allProduct border relative border-gray-200 rounded-lg m-2 p-3 hover:shadow-xl hover:border-green-500  transition-all duration-300 group">
                    <img src={product.imageCover} className="  w-full" alt="" />
                    <h3 className="text-slate-500 mt-2 text-[12px] mb-1">
                      {product.category.name}
                    </h3>
                    <p className=" font-medium text-[14px]">
                      {product.title.split(" ").slice(0, 2).join(" ")}
                    </p>
                    <span className="text-gray-500 text-[12px]">
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star-half-stroke  text-yellow-400"></i>
                      {product.ratingsAverage}
                    </span>

                    <div className="price flex justify-between font-medium text-sm items-center">
                      <span className=" mt-2">{product.price} EGP</span>

                      <button
                        onClick={() => addToCart(product.id)}
                        type="submit"
                        className="text-white mt-4 mb-2 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm  md:px-3 px-2 py-1.5 text-center"
                      >
                        <i className="fa-solid fa-plus text-[11px]"></i> Add
                      </button>
                    </div>
                    <div className="icons absolute top-[43%] left-[17%] md:left-[22%] lg:left-[21%] group right-[17%] lg:right-[19%] group-hover:block hidden transition-all duration-500  ">
                      <Link
                        to={`/productDetails/${product.id}/${product.category.name}`}
                      >
                        <i className="fa-solid fa-eye text-gray-500 text-xs  lg:p-2.5 p-2 rounded-md hover:bg-emerald-600 hover:text-white transition-all duration-200 bg-white shadow-lg"></i>
                      </Link>{" "}
                      <i
                        onClick={() => getwishlist(product.id)}
                        className={
                          test.includes(product.id) ||
                          WishCheack.includes(product.id)
                            ? "fa-solid fa-heart me-[2px]  cursor-pointer  text-emerald-600 text-xs  lg:p-2.5 p-2 rounded-md  hover:bg-emerald-600 hover:text-white transition-all duration-200 bg-white shadow-lg"
                            : "fa-regular fa-heart me-[2px]  text-gray-500 text-xs  lg:p-2.5 p-2 rounded-md  hover:bg-emerald-600 hover:text-white transition-all duration-200 bg-white shadow-lg"
                        }
                      ></i>
                      <i className="fa-solid fa-right-left cursor-pointer text-gray-500 text-xs lg:p-2.5 p-2 rounded-md  hover:bg-emerald-600 hover:text-white transition-all duration-200 bg-white shadow-lg "></i>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
