import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h2>Products</h2>
      <Link to="/about" className="btn">
        About
      </Link>
    </div>
  );
};

export default Products;
