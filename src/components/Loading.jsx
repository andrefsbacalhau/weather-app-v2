import React from "react";
import loadingPenguin from "../assets/images/loading-fishing.gif";

const Loading = ({ text }) => {
  return (
    <div className="loading-container">
      <h1 className="loading-text">{`${text} data...please wait.`}</h1>
      <div className="loading-image">
        <img src={loadingPenguin} alt="loading-penguin" />
      </div>
    </div>
  );
};

export default Loading;
