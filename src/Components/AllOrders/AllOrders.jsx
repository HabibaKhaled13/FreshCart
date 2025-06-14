
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Delivery from "../../assets/images/delivery.gif";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export default function AllOrders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { id } = jwtDecode(localStorage.getItem("usertoken"));
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
      .then((res) => {
        setOrders(res.data);
           console .log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 md:w-11/12">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="text-3xl font-bold text-gray-800">My Orders</h2>
          <Link
            to="/"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-md shadow"
          >
            Back to Home
          </Link>
        </div>
        <div className="address">
          <h2 className="md:text-2xl text-xl font-medium text-center"> Your order has been confirmed successfully!</h2>
          <img
            src={Delivery}
            alt="delivery-service"
            className="md:w-[25%] w-[70%] mx-auto my-3"
          />
          <p className=" text-gray-700 mb-6  ">
            Find order invoice, payment and shipping details here
          </p>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <span className="loader"></span>
          </div>
        ) : orders.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-16">
            You have no orders yet.
          </p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-md rounded-lg p-6 mb-10"
            >
              {/* Order Header */}
              <div className="flex justify-between items-center border-b pb-4 mb-4 flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Order #{order._id.slice(-6).toUpperCase()}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Placed on {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="text-sm text-left text-gray-600">
                  <p>
                    <strong>Status:</strong>{" "}
                    {order.isDelivered ? (
                      <span className="text-emerald-600">Delivered</span>
                    ) : (
                      <span className="text-yellow-500">In Transit</span>
                    )}
                  </p>
                  <p>
                    <strong>Payment:</strong>{" "}
                    {order.isPaid ? (
                      <span className="text-emerald-600">Paid</span>
                    ) : (
                      <span className="text-red-500">Unpaid</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Products */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {order.cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex gap-4 border rounded-md p-3 shadow-sm bg-gray-50"
                  >
                    <div className="relative w-20">
                      <img
                        src={item.product?.imageCover}
                        alt={item.product?.title}
                        className="w-full h-full object-contain rounded-md"
                      />
                      {item.count > 1 && (
                        <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                          {item.count}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-md font-semibold text-gray-700">
                        {item.product?.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item.product?.brand?.name}
                      </p>
                      <p className="text-sm font-bold text-emerald-600">
                        EGP {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="mt-6 border-t pt-4 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Shipping Address
                  </h4>
                  <p className="text-sm text-gray-600">
                    {order.shippingAddress.details},{" "}
                    {order.shippingAddress.city}
                  </p>
                  <p className="text-sm text-gray-600">
                    Phone: {order.shippingAddress.phone}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Payment & Total
                  </h4>
                  <p className="text-sm text-gray-600">
                    Payment Method: {order.paymentMethodType}
                  </p>
                  <p className="text-sm text-gray-600">
                    Total Price:{" "}
                    <span className="font-bold text-emerald-700">
                      EGP {order.totalOrderPrice}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
