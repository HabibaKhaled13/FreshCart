import React, { useContext, useState } from "react";
import phoneLogo from "../../assets/images/signup-g.svg";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Register() {
  const [ApiError, setApiError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  let navigate = useNavigate();

  let {Login ,setLogin} = useContext(UserContext);

  function HandleSubmit(values) {
    setisLoading(true);

    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .then((res) => {
        console.log(res);
        setisLoading(false);
        if (res.data.message == "success") {
          localStorage.setItem("usertoken", res.data.token);
          setLogin(res.data.token)
          navigate("/");
   
        }
      })
      .catch((res) => {
        setApiError(res.response.data.message);
        setisLoading(false);
      });
  }

  let validationSchema = yup.object().shape({
    name: yup.string().min(3).max(15).required(),
    email: yup
      .string()
      .email("not valid email")
      .min(3)
      .required("email is required"),
    password: yup.string().min(6).required("password is required"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password")], "not match with rePassword")
      .required("rePassword is required"),
    phone: yup
      .string()
      .matches(/^01[1025][0-9]{8}$/, "phone not valid")
      .required("phone is required"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: HandleSubmit,
  });

  return (
    <section className="my-2">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center ">
          <div className="md:w-1/2">
            <img src={phoneLogo} alt="Sign Up image" className="mx-auto" />
          </div>

          <div className="md:w-1/2">
            <form
              className="max-w-md mx-auto px-7 py-10 shadow-xl mt-4 rounded-md md:mb-0 mb-8"
              onSubmit={formik.handleSubmit}
            >
              <div className="title mb-5">
                <h2 className="text-3xl bold mb-4 font-semibold">
                  Get Start Shopping
                </h2>
                <p className="text-gray-700 ">
                  Welcome to FreshCart! Enter your email to get started.
                </p>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  value={formik.values.name}
                  type="text"
                  name="name"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="floating_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter your name
                </label>
                {formik.errors.name && formik.touched.name ? (
                  <div
                    className="p-4  mb-4 text-sm text-red-800 rounded-sm bg-red-50 "
                    role="alert"
                  >
                    <span className="font-medium">{formik.errors.name}</span>
                  </div>
                ) : null}
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  value={formik.values.email}
                  type="email"
                  name="email"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter your email
                </label>
                {formik.errors.email && formik.touched.email ? (
                  <div
                    className="p-4  mb-4 text-sm text-red-800 rounded-sm bg-red-50 "
                    role="alert"
                  >
                    <span className="font-medium">{formik.errors.email}</span>
                  </div>
                ) : null}
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  value={formik.values.password}
                  type="password"
                  name="password"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter your password
                </label>

                {formik.errors.password && formik.touched.password ? (
                  <div
                    className="p-4  mb-4 text-sm text-red-800 rounded-sm bg-red-50 "
                    role="alert"
                  >
                    <span className="font-medium">
                      {formik.errors.password}
                    </span>
                  </div>
                ) : null}
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  value={formik.values.rePassword}
                  type="Password"
                  name="rePassword"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="floating_rePassword"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                  placeholder=" "
                  required
                />

                <label
                  htmlFor="floating_rePassword"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter your rePassword
                </label>

                {formik.errors.rePassword && formik.touched.rePassword ? (
                  <div
                    className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  "
                    role="alert"
                  >
                    <span className="font-medium">
                      {formik.errors.rePassword}
                    </span>
                  </div>
                ) : null}
              </div>

              <div className="relative z-0 w-full mb-8 group">
                <input
                  value={formik.values.phone}
                  type="tel"
                  name="phone"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                  placeholder=" "
                  required
                />

                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter your phone
                </label>
                {formik.errors.phone && formik.touched.phone ? (
                  <div
                    className="p-4  mb-4 text-sm text-red-800 rounded-sm bg-red-50 "
                    role="alert"
                  >
                    <span className="font-medium">{formik.errors.phone}</span>
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center   "
              >
                {isLoading ? (
                  <i className="fa-solid fa-circle-notch fa-spin text-white text-xl"></i>
                ) : (
                  "Submit"
                )}
              </button>
              <Link className=" block text-center mt-4" to={"/login"}>
                Already have an account?
                <span className="text-blue-700 font-medium"> Sign in</span>
              </Link>

              {ApiError ? (
                <div
                  className="p-4 font-semibold mt-2 text-sm text-red-800 rounded-sm bg-red-50 text-center "
                  role="alert"
                >
                  {ApiError}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
