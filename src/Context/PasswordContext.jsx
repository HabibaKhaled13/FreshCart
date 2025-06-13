import axios from "axios";
import React, { createContext } from "react";

export let PassContext = createContext();
export default function PasswordContextProvider(props) {
let headers = { token: localStorage.getItem("usertoken")}

  function ForgotPass(email) {
    return axios.post(
      `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,email
    );
  }
  function ResetPass(value) {
    return axios.post(
      `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,value
    );
  }


  function getNewPass(value , newPass) {
    return axios.post(
      `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,{
      currentPassword:value,
        password:newPass,
        rePassword:newPass
    },{headers}
    );
  }

  return (
    <PassContext.Provider value={{ ForgotPass, ResetPass, getNewPass}}>
      {props.children}
    </PassContext.Provider>
  );
}
