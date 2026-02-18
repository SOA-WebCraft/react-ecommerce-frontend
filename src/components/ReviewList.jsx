import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReviewList = () => {
  const { productSlug } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://Appson28.pythonanywhere.com/api/products/${productSlug}/reviews/`
        );
        if (!response.ok) throw new Error("Error fetching reviews");
        const data = await response.json();
        setReviews(data.results);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchReviews();
  }, [productSlug]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Rating: {review.rating} / 5</p>
          <p>{review.comment}</p>
        </div>
      ))}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ReviewList;
