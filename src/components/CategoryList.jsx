import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [error, setError] = useState(null);

  const fetchCategories = async (
    url = "https://Appson28.pythonanywhere.com/api/categories/"
  ) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error fetching categories");
      const data = await response.json();
      setCategories(data.results);
      setNextPage(data.next);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      {categories.map((cat) => (
        <div key={cat.id}>
          <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
        </div>
      ))}
      {nextPage && (
        <button onClick={() => fetchCategories(nextPage)}>Next Page</button>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CategoryList;
