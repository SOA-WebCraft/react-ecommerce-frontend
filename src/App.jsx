import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ReviewList from "./components/ReviewList";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import SuccessPage from "./components/SuccessPage";
import OrderTable  from "./components/Order";
import InvoicePrinter  from "./components/OrderItems";
import Home from "./components/Home";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";


export default function App(){
   return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:categorySlug" element={<CategoryList />} />
            <Route path="/products/:productSlug/" element={<ProductDetail />} />
            <Route path="reviews" element={<ReviewList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/order" element={<OrderTable />} />
            <Route path="/orderItem" element={<InvoicePrinter />} />
          </Routes>
        </Router>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}