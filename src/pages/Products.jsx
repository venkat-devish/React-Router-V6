import React from "react";
import products from "../data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="section">
      {products.map((product) => {
        return (
          <article key={product.id}>
            <h5>{product.name}</h5>
            <Link to={`/product/${product.id}`}>Click here!</Link>
          </article>
        );
      })}
    </section>
  );
};

export default Products;
