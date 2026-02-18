import { CheckCircle } from "lucide-react";
import {Link} from "react-router-dom";

const SuccessPage = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-4">
          Thank you for your purchase. We’ve sent a confirmation email with your
          order details.
        </p>

        <Link
           to="/"
          className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition text-decoration-none"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
