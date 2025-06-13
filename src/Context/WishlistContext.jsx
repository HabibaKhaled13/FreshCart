import axios from "axios";
import React, { createContext, useState } from "react";

export let WishlistContext = createContext();

export default function WishlistContextProvider(props) {
  const [Wishlist, setWishlist] = useState([])
  const [numOfWishlistItems, setNumOfWishlistItems] = useState(0);
  let headers = {  token: localStorage.getItem("usertoken") };

  function wishList(id) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId: id },
        { headers }
      )
      .then((res) => {
        setNumOfWishlistItems(res.data.count);
        return res;
      })
      .catch((err) => err);
  }
   function wishlistDelete(id) {
    return axios
      .delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        { headers }
      )
      .then((res) => {
  
      return res})
      .catch((err) => err);
      }
  
   function wishListLogged() {
    return  axios
      .get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        headers,
      })
      .then((res) => {
              setWishlist(res.data.data)
        setNumOfWishlistItems(res.data.count);
        return res;
      })
      .catch((err) => err);
  }
  return (
    <>
      <WishlistContext.Provider
        value={{ wishList, wishListLogged, wishlistDelete, numOfWishlistItems,Wishlist }}
      >
        {props.children}
      </WishlistContext.Provider>
    </>
  );
}
