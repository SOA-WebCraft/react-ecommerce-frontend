import React, { useContext, useEffect, useState } from "react";
import {useParams,  Link } from "react-router-dom";
import axios from "axios";
import  CartContext  from "../context/CartContext";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import Layout from "../layout/Layout";
import {
  Truck,
  RotateCcw,
  ChevronRight,
  Heart,
  ShoppingCart,
  Minus,
  Plus,
} from "lucide-react";
import ProductContext from "../context/ProductContext";
import Spinner from "../lib/spinner";

const ProductDetail = () => {
  
  const { cart,loading, addToCart, updateQuantity } = useContext(CartContext);
  const [product, setProduct ] = useState(null)
  const { productSlug } = useParams();
  const [primaryImage, setPrimaryImage] = useState(null);
  const [mainImage, setMainImage] = useState(null);
 
      
    const fetchProduct = async (productSlug) => {
      try {
        const { data } = await axios.get(
          `https://Appson28.pythonanywhere.com/api/products/${productSlug}/`
        );
        setProduct(data);
        const primary =
          data?.images?.find((img) => img.is_primary) || data?.images[0];
        setMainImage(primary || null);
        setPrimaryImage(primary || null);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    


    useEffect(() => {
      fetchProduct(productSlug)
    }, [productSlug])

  const cartItem = cart?.items?.find((it) => it?.product?.id === product?.id);

 const accessToken = localStorage.getItem("access")
    
if (!cart && loading) return (
   <Layout>
  <div className="flex justify-center items-center h-80">
    <Spinner/>
  </div >
  </Layout>
)

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <nav className="flex py-3 text-gray-600 text-sm mb-4">
          <Link to="/" className="hover:text-primary-600">
            Home
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/products" className="hover:text-primary-600">
            Products
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <Link
            to={product?.category}
            className="hover:text-primary-600 capitalize"
          >
            {product?.category}
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-gray-900 truncate max-w-[200px]">
            {product?.name}
          </span>
        </nav>

        <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-8 mb-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={mainImage?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product?.images?.map((image, index) => (
                  <button
                    key={index}
                    className={`aspect-square rounded overflow-hidden  ${
                      mainImage?.id === image.id
                        ? "border-primary-500"
                        : "border-transparent"
                    }`}
                     onMouseEnter={() => setMainImage(image)}
                     onMouseLeave={() => setMainImage(primaryImage)}
                  >
                    <img
                      src={image.image}
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div>
              <div className="mb-4">
                <div variant="danger" className="mb-2">
                  Sale % Off
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {product?.name}
                </h1>

                <div className="flex items-center gap-2"></div>

                <div className="flex items-baseline mt-2">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product?.price}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 py-4">
                <p className="text-gray-700 mb-4">{product?.description}</p>

                {/* Color selector 
        {product.colors && product.colors.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  className={`px-3 py-1 border rounded-md transition-colors ${
                    selectedColor === color
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}
        */}
                {/* Size selector 
        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`w-10 h-10 flex items-center justify-center border rounded-md transition-colors ${
                    selectedSize === size
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
        */}
           {cartItem? (
               
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Quantity
                  </h3>
                  <div className="flex items-center">
                    <button
                      className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center hover:bg-gray-100"
                      onClick={() => {
                
                  updateQuantity(cartItem.id, "decrement");
                }}
                    >
                      <Minus size={16} />
                    </button>
                    <div
                      className="w-10 h-10 border border-gray-300  flex items-center justify-center hover:bg-gray-100"
                    >
                      {cartItem? cartItem.quantity:0}
                    </div>

                    <button
                      className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center hover:bg-gray-100"
                      onClick={() => 
                         {
            
                  updateQuantity(cartItem.id, "increment");
                }
                      }
                    >
                      <Plus size={16} />
                    </button>

                    <span className="ml-3 text-sm text-gray-500">
                      {product?.stock} items available
                    </span>
                  </div>
                </div>

                    ): (
                <div className="flex  gap-2 mb-6">
                  <div
                    onClick={() => {
                      if (!product?.id) return;
                      addToCart(product.id);}}
                    className="flex gap-2 text-white px-2 cursor-pointer   bg-blue-500 rounded justify-center items-center "
                  >
                    <ShoppingCart size={18} className="" />
                    <div>Add to Cart</div>
                  </div>
                </div>
  )}  
  
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <Truck
                      size={18}
                      className="mr-2 text-primary-600 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700">
                      Free shipping for orders over $50
                    </span>
                  </div>
                  <div className="flex items-start">
                    <RotateCcw
                      size={18}
                      className="mr-2 text-primary-600 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700">30-day easy returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product details */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">Product Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-700 mb-4">{product?.description}</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in odio ultrices, tincidunt nisi nec, consectetur magna. Sed
                luctus urna sit amet felis finibus, a venenatis libero suscipit.
                Phasellus eleifend lectus id scelerisque iaculis.
              </p>

              <h3 className="font-semibold mt-6 mb-2">Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>High-quality materials for durability</li>
                <li>Designed for comfort and everyday use</li>
                <li>Modern, sleek design</li>
                <li>Easy to clean and maintain</li>
                <li>Compatible with all standard accessories</li>
              </ul>
            </div>

            <div className="border-l-0 md:border-l border-gray-200 md:pl-6">
              <h3 className="font-semibold mb-4">Specifications</h3>

              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Brand</span>
                  <span className="font-medium">ShopHub</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Model</span>
                  <span className="font-medium">SH-{product?.id}00</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Weight</span>
                  <span className="font-medium">0.5 kg</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Dimensions</span>
                  <span className="font-medium">25 × 10 × 5 cm</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Material</span>
                  <span className="font-medium">Premium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">In Box</span>
                  <span className="font-medium">Product, Manual</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">You May Also Like</h2>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
