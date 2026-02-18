import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
//import useAxios from "../lib/useAxios";
import API from "../lib/api";
const CartContext = createContext();

export default CartContext;


export const CartProvider=({ children }) =>{
  const [cart, setCart] = useState(null);
  const [orders,setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 // const api = useAxios();
 

  const fetchCart = async () => {
      setLoading(true)
    try {
      const res = await API.get(`/api/cart/`);
      setCart(res.data);
      console.log(res.data);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const addToCart = async (productId) => {
    try {
      await fetchCart();
      await API.post(`/api/cart/items/add_item/`, {
        product_id: productId,
        quantity: 1,
      });
      await fetchCart();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const updateQuantity = async (carItemtId, action) => {
    setLoading(carItemtId);
    try {
      await API.patch(
        `/api/cart/items/${carItemtId}/update_quantity/`,
        {
          action,
        }
      );
      await fetchCart();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
    setLoading(null);
  };

  const removeItem = async (carItemtId) => {
   
    try {
       setLoading(true);
      const res = await API.delete(
        `/api/cart/items/${carItemtId}/remove_item`
      );
      console.log(res.data.message);
      await fetchCart();
      setLoading(false);
    } catch (error) {
      console.error("Error removing item:", error);
       setLoading(false);
    }
  };

  const checkout = async () => {
    const { data } = await API.post(
      `/api/create-checkout-session/payment/`
    );
    window.location.href = data.checkout_url; 
  };

 const fetchOrder = async () => {
    try {
      const res = await API.get(`/api/orders/`);
      setOrders(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };
  

  useEffect(() => {
    setTimeout(()=>{
     fetchCart();
     fetchOrder();
    },2000)
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        loading,
        orders,
        fetchCart ,
        addToCart,
        updateQuantity,
        removeItem,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}




