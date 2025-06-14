import axios from "axios";
import React, { createContext } from "react";
export let OrdersContext = createContext();

export default function AllOrdersContext(props) {
  function getAllOrders() {
   
  }
  return (
    <>
      <OrdersContext.Provider value={{ getAllOrders }}>
        {props.children}
      </OrdersContext.Provider>
    </>
  );
}
