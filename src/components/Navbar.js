import { useCallback } from "react";
import useApi from "../hooks/useApi";

function Navbar({ setSelectedCategory }) {
  const { loading, error, data: categories } = useApi(
    "https://fakestoreapi.com/products/categories",
    null
  );

  const handleClick = useCallback(
    (category) => {
      setSelectedCategory(category);
    },
    [setSelectedCategory]
  );

  //rendering part

  if (loading) {
    return <div className="loader">Categories is loading...</div>;
  } else if (error) {
    return <div className="error">Oops please reload the page!!!</div>;
  } else if (categories.length === 0) {
    return <div>No categories found.</div>;
  } else {
    return (
      //displaying categories
      <div className="products">
        {categories.map((category) => (
          <div
            key={`category-${category}`}
            className="product-category"
            onClick={() => handleClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
    );
  }
}

export default Navbar;
