import CartContext  from "../context/CartContext";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import ProductContext from "../context/ProductContext";

const ProductList = () => {
  const {  addToCart, cart } = useContext(CartContext);
  const { products} = useContext(ProductContext);




  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Product List</h1>
        <div className="grid md:grid-cols-3 gap-6 no-underline">
          {products.map((product) => {
            const primaryImage =
              product.images.find((img) => img.is_primary) || product.images[0];
            return (
              
              <div key={product.id} className="border rounded-lg shadow p-4 ">
                <img
                  src={primaryImage?.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded"
                />
              <Link
                key={product.id}
                to={`/products/${product.slug}`}
                className="text-decoration-none"
              >
                
                <div className="text-xl font-semibold mt-2">{product.name}</div>
              </Link>
              <p className="text-gray-600">{product.description}</p>
                <p className="text-green-600 font-bold mt-2">
                  ${product.price}
                </p>
                <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                <Button variant="primary" onClick={()=>addToCart(product.id,1)} className="mt-2">
                  Add to Cart
                </Button>
                </div>
                
               
                
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;
