import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const categoriesData = await response.json();
        setCategories(categoriesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Categories</h2>
      <ListGroup
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          marginTop: "1rem",
        }}
      >
        <ListGroupItem style={{ marginRight: "1rem" }}>
          <Link to={"/"}>All</Link>
        </ListGroupItem>
        {categories.map((category) => (
          <ListGroupItem key={category} style={{ marginRight: "1rem" }}>
            <Link to={`/category/${category}`}>{category}</Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default CategoryList;
