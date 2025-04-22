import React from "react";
import { useNavigate } from "react-router-dom";

const Error = ({ text }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="error-container">
      <h1 className="error-text">{text}</h1>

      <button onClick={() => goHome()}>Back to home page</button>
    </div>
  );
};

export default Error;
