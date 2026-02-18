import  CartContext  from "../context/CartContext";
import {
  Minus,
  Plus,
  Trash2,
  Loader2,
  CreditCard,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import Button from "react-bootstrap/Button";
import Spinner from "../lib/spinner";


export default function Cart() {
  const { cart, loading, updateQuantity, removeItem, checkout } = useContext(CartContext);;
  const [show, setShow] = useState(false);
/*
  const accessToken = localStorage.getItem("access")
    ? JSON.stringify(localStorage.getItem("access"))
    : null;
  const userId = accessToken ? jwtDecode(accessToken).user_id : "";

  
  const usercart = cart.find((x) => x.user === userId);
*/
if (!cart && loading) return (
 <Layout>
  <div className="flex justify-center items-center h-80">
    <Spinner/>
  </div >
 </Layout>
)

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  return (
    <Layout>
      {!cart && !loading || cart?.cart_total_quantity === 0 ? (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-lg border border-gray-200 animate-fade-in">
            <div className="flex justify-center mb-4">
              <ShoppingBag size={60} className="text-gray-300" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products">
              <Button variant="primary" >Continue Shopping</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ShoppingCart size={24} className="mr-2" />
            Your Cart {cart.cart_total_quantity} items
          </h1>

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="col-span-2 border  border-gray-200 rounded  p-4 ">
                <div className="flex flex-col  divide-y  gap-2 ">
                  {cart?.items?.map((item) => {
                    const primaryImage = item.product.images.find((img) => img.is_primary) || product.images[0];
                   return (
                    <div key={item.id}>
                      <div className="  py-3 ">
                        <div className="flex justify-between gap-3">
                            {console.log(item)}
                            <img
                            src={primaryImage?.image}
                            alt={item.name}
                            className="w-20 h-fit object-cover rounded  flex-1"
                          />
                          <div className="flex-2 "> 
                            <div className="flex  flex-col gap-2 ">
                            <h4>{item.product.name}</h4>
                            <h6>${item.product_price}</h6>
                            <div className="flex gap-2 text-5xl h-5">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, "decrement")
                                }
                                className=" border rounded-sm"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="text-sm w-6  flex justify-center items-center">
                                {
                                  item.quantity
                                }
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, "increment")
                                }
                                className=" border rounded-sm"
                              >
                                <Plus className="h-3 w-3 " />
                              </button>
                            </div>
                            </div>
                          </div>
                          <div className="flex-2">
                            <div className="flex flex-col gap-7">
                            <div className=" text-2xl flex justify-end ">${item.total_price}</div>
                            <div
                              onClick={() => {
                                removeItem(item.id);
                              }}
                              className="flex justify-end text-2xl "
                            >
                              <Trash2 />
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   );
                   })}

                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${cart?.cart_total_price}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Quantity</span>
                    <span>{cart?.cart_total_quantity}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>2</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (7%)</span>
                    <span>$3</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between font-bold text-gray-900">
                      <span>Total</span>
                      <span>${}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">kkkkk</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    checkout();
                  }}
                >
                  <CreditCard size={18} className="mr-2" />
                  Proceed to Checkout
                </button>

                <div className="mt-6 border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-gray-900 mb-2">We Accept</h3>
                  <div className="flex gap-2">
                    <div className="h-8 w-12 bg-gray-200 rounded"></div>
                    <div className="h-8 w-12 bg-gray-200 rounded"></div>
                    <div className="h-8 w-12 bg-gray-200 rounded"></div>
                    <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-lg border border-gray-200 p-4 md:p-6">
                <h3 className="font-medium text-gray-900 mb-2">
                  Have a promo code?
                </h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
