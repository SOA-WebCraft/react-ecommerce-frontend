
import React, { useState, useEffect } from "react";

export default function InvoiceModal({ order }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // When modal closes, wait for animation to finish before unmounting
  useEffect(() => {
    if (!isOpen && showModal) {
      const timer = setTimeout(() => setShowModal(false), 300); // match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, showModal]);

  if (!order) return null;

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        View Invoice
      </button>

      {showModal && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-white w-full max-w-2xl p-6 rounded shadow-lg transform transition-all duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2">Invoice #{order.id}</h2>
            <p className="text-gray-700">User: {order.user}</p>
            <p className="text-gray-700 mb-4">
              Date: {new Date(order.created_at).toLocaleString()}
            </p>

            <div className="overflow-x-auto">
           <table className="min-w-full border border-gray-300 text-black">
            <thead className="bg-gray-100">
          <tr>
           <th className="border p-2 text-left">Product</th>
           <th className="border p-2 text-left">Qty</th>
           <th className="border p-2 text-left">Price</th>
          <th className="border p-2 text-left">Subtotal</th>
         </tr>
         </thead>
        <tbody>
          {(order.items || []).map((item) => (
        <tr key={item.id}>
          <td className="border p-2">{item.product_name}</td>
          <td className="border p-2">{item.quantity}</td>
          <td className="border p-2">${item.price}</td>
          <td className="border p-2">${item.subtotal}</td>
        </tr>
         ))}
         <tr>
          <td className="border p-2 col-span-2 border-collapse"></td>
          <td className="border p-2 "></td>
          <td className="border p-2 ">Grand Total:</td>
          <td className="border p-2 ">${order.total_price}</td>
         </tr>
        </tbody>
        </table>
          </div>

            <h3 className="text-xl font-semibold text-right">
             ${order.cart_total_price}
            </h3>
          </div>
        </div>
      )}
    </>
  );
}
