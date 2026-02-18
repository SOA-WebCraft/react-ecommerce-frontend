import React from "react";
import { Card, Button } from "bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    await addToCart(product.id, 1);
  };

  return (
    <Card className="h-100">
      <Link to={`/product/${product.slug}`}>
        <Card.Img
          variant="top"
          src={product.image || "https://via.placeholder.com/300x200"}
          alt={product.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title
          as={Link}
          to={`/product/${product.slug}`}
          className="text-decoration-none"
        >
          {product.name}
        </Card.Title>
        <Card.Text className="text-muted">{product.category.name}</Card.Text>
        <Card.Text className="fw-bold fs-5 mt-auto">${product.price}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart} className="mt-2">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
