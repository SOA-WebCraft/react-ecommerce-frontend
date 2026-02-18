import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const ProductContext = createContext();

export default ProductContext;


export const ProductProvider=({ children }) =>{
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 //const { productSlug } = useParams();
 //const [mainImage, setMainImage] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`https://Appson28.pythonanywhere.com/api/products/`);
      setProducts(data.results);
      console.log(data.results[0].images[0].image);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false)
    }
  };

    
  
    

    useEffect(() => {
      setTimeout(()=>{
      fetchProducts();
      },2000)
    }, [])

    
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}




