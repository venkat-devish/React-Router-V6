import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);

  return <div>Error</div>;
};

export default Error;
