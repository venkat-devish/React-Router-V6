import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const { image, name } = product;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">back to products</Link>
    </section>
  );
};

export default ProductDetails;
