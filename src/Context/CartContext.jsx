import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export let CartContext = createContext();
export default function CartContextProvider(props) {
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  let headers = { token: localStorage.getItem("usertoken") };
     const [CartId, setCartId] = useState([]);

 function addProductToCart(productId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId: productId },
        { headers }
      )
      .then((res) => res)
      .catch((err) => err);
  }

 function getLoggedUserProduct() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers,
      })
      .then((res) => {

        setNumOfCartItems(res.data.numOfCartItems);
        setCartId(res.data.data._id)
        return res
      }).catch((err) => err);

  }

 function updateProduct(id, newCount) {
    return axios.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      { count: newCount },
      { headers }
    );
  }

  function checkOut(cartId, url, formData) {
    return axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,

      { shippingAddress: formData },
      { headers }
    );
  }

 function deleteProduct(id) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        headers: headers,
      })
      .then((res) => {
        setNumOfCartItems(res.data.numOfCartItems);
        return res;
      })
      .catch((err) => err);
  }


  return (
    <>
      <CartContext.Provider
        value={{
          addProductToCart,
          getLoggedUserProduct,
          updateProduct,
          deleteProduct,
          checkOut,
          numOfCartItems,
          CartId
        }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
}
