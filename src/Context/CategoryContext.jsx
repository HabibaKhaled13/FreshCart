import axios from "axios";
import React, { createContext } from "react";

export let CategoryContext = createContext();
export default function CategoryContextProvider(props) {
  function categorylist() {
    return axios.get(
      `https://ecommerce.routemisr.com/api/v1/subcategories/6407f40db575d3b90bf957fa`
    );
  }
  return (
    <>
      <CategoryContext.Provider value={{ categorylist }}>
        {props.children}
      </CategoryContext.Provider>
    </>
  );
}
