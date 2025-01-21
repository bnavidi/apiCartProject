import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import CartContext from "../context/CartContext";
import { Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const { addToCart } = React.useContext(CartContext);

  useEffect(() => {
    const url =
      category === "all" || !category
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Failed to fetch products: ", error));
  }, [category]);

  return (
    <div>
      <h1>{category}</h1>
      <Row>
        {products.length > 0 ? (
          products.map((product) => (
            <Col sm="4" key={product.id} className="mb-4">
              <ProductItem
                product={product}
                addToCart={addToCart}
              ></ProductItem>
            </Col>
          ))
        ) : (
          <p>No products available in this category</p>
        )}
      </Row>
    </div>
  );
}

export default ProductList;
