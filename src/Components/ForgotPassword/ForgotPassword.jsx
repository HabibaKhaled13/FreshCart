import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import image from "../../assets/images/forgetPass.svg";
import { PassContext } from "../../Context/PasswordContext";

export default function ForgotPassword() {
  const [Loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let { ForgotPass } = useContext(PassContext);

  async function getForgetPassword(userEmail) {
    setLoading(true);
    let respone = await ForgotPass(userEmail);
    console.log(respone);
    if (respone.data.statusMsg == "success") {
      navigate("/verify-reset-password");
    }
  }
  let validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("not valid email")
      .min(3)
      .required("email is required"),
  });
  let formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: getForgetPassword,
  });
  return (
    <>
      <section className="my-2">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row items-center ">
            <div className="md:w-1/2">
              <img src={image} alt="Forget password" className="mx-auto" />
            </div>

            <div className="md:w-1/2">
              <form
                className="max-w-md mx-auto px-7 py-10 shadow-xl mt-4 rounded-md md:mb-0 mb-8"
                onSubmit={formik.handleSubmit}
              >
                <div className="title mb-5">
                  <h2 className="text-3xl bold mb-4 font-bold">
                    Forgot your password?
                  </h2>
                  <p className="text-gray-700 text-[15px]">
                    Please enter the email address associated with your account
                    and We will email you a link to reset your password.
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

                <button
                  type="submit"
                  className="text-white bg-emerald-700 mb-3 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center "
                >
                  {Loading ? (
                    <i className="fa-solid fa-circle-notch fa-spin text-white text-xl"></i>
                  ) : (
                    "Reset Password"
                  )}
                </button>

                <Link
                  to="/register"
                  className="text-black bg-[#eaeeed] hover:bg-[#CCCFCE] focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full block px-5 py-2.5 text-center "
                >
                  
                  "Back"
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
