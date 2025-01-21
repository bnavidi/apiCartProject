import React from "react";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Slider />
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default Home;
