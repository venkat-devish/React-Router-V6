import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const [message, setMessage] = useState("No route found!!");
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);

  setTimeout(() => {
    setMessage("Redirecting to home.......");
  }, 1500);

  return <div>{message}</div>;
};

export default Error;
