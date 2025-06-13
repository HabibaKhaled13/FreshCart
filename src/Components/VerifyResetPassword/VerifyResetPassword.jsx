
import { useFormik } from "formik";
import React, { useContext,useState} from "react";
import { Link, Navigate } from "react-router-dom";
import * as yup from "yup";
import { PassContext } from "../../Context/PasswordContext";


export default function VerifyResetPassword() {
  const [Loading, setLoading] = useState(false);

  let { ResetPass } = useContext(PassContext);


  async function getResetPassword(value) {
    let respone = await ResetPass(value);
console
   }


  let validationSchema = yup.object().shape({
    number: yup
    .number()
    .typeError("invalid code")
      .min(6)
      .required("code is required"),
  });
  let formik = useFormik({
    initialValues: { number : "" },
    validationSchema,
    onSubmit: getResetPassword,
  });
  return (
    <>
      <section className="my-10">
        <div className="container">
            <div className="md:w-full">
              <form
                className="max-w-lg mx-auto px-7 py-10 shadow-xl mt-4 rounded-md md:mb-0 mb-8"
                onSubmit={formik.handleSubmit}
              >
                <div className="title mb-5">
                  <h2 className="text-3xl bold mb-4 font-bold">
                 Password Reset Code (OTP)
                  </h2>
                  <p className="text-gray-700 text-[15px]">
                  (valid for 10 minutes)
                  </p>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <input
                    value={formik.values.password}
                    type="number"
                    name="number"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="number"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="number"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
              Code:
                  </label>
                  {formik.errors.pail && formik.touched.password ? (
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
                  className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
                >
                  {Loading ? (
                    <i className="fa-solid fa-circle-notch fa-spin text-white text-xl"></i>
                  ) : (
                    "Send"
                  )}
                </button>
        
              </form>
       
          </div>
        </div>
      </section>
    </>
  );
}
