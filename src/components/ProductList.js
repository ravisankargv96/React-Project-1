import React from "react";
import useApi from "../hooks/useApi";

import Product from "./Product";

function ProductList({ selectedCategory }) {
  const { loading, error, data } = useApi(
    `https://fakestoreapi.com/products/category/${selectedCategory}`,
    []
  );

  if (loading) {
    return <div className="loader">Products is loading...</div>;
  } else if (error) {
    return (
      <div className="error">Error Occured, Oops please reload the page!!!</div>
    );
  } else if (data.length === 0) {
    return <div>No products found, select a category</div>;
  } else {
    return (
      <div className="product-list">
        {/* //foreach product */}
        {data.map((product) => (
          <div>
            <Product key={product.id} product={product} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
