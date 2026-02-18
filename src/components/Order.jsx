
import  CartContext from "../context/CartContext";
import { useContext } from "react";
import OrderCard from "./OrderItems";
import Layout from "../layout/Layout";

const OrderTable = () => {
  const {orders} = useContext(CartContext);



 const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  shipped: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
      };

  return (
    <Layout>
    <div className="container mx-auto p-6">
    <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Order ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Total</th>
            <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 text-sm font-medium text-gray-800">#{order.id}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{order.user}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{order.created_at}</td>
              <td className="px-6 py-4 text-sm">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                ${(order.total_price / 100).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-right">
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                 < OrderCard order={order}/> 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </Layout>
  );
};

export default OrderTable; 

