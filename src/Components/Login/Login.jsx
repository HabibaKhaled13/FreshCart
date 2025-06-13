import React, { useContext, useState } from "react";
import phoneLogo from "../../assets/images/signin-DlR7P608.png";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
   const [isLoading, setisLoading] = useState(false);
  let { Login, setLogin } = useContext(UserContext);

  let navigate = useNavigate();
 

  function HandleLogin(values) {
    setisLoading(true);

    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
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
        setisLoading(false);
      });
  }

  let validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("not valid email")
      .min(3)
      .required("email is required"),
    password: yup.string().min(6).required("password is required"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: HandleLogin,
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
                <h2 className="text-3xl  bold mb-3 font-bold">
                  Login to FreshCart
                </h2>
                <p className="text-gray-700 ">
                  Welcome back to FreshCart! Enter your email to get started.
                </p>
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
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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

              <div className="flex items-center justify-between  flex-wrap font-semibold mt-8 mb-4 text-sm">
                <div className=" md:w-auto w-full ">
                 
                  <input
                    checked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-[14px] h-[14px] accent-emerald-600   bg-gray-100 border-gray-300 rounded-xl"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ms-2 font-medium text-slate-500"
                  >
                    Remember me
                  </label>
                </div>

                <div className=" md:w-auto w-full">
                 
                  <Link className=" md:mt-0 my-2 inline-block text-center text-slate-500 " to={"/forget-password"}>
                    Forgot password?
                    <span className="text-emerald-600 "> Reset It </span>
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
              >
                {isLoading ? (
                  <i className="fa-solid fa-circle-notch fa-spin text-white text-xl"></i>
                ) : (
                  "Submit"
                )}
              </button>
              <Link className=" block text-center mt-4  font-semibold " to={"/register"}>
                Don't have an account?
                <span className="text-blue-700 "> Sign Up </span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
