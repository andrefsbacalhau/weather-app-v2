import React from "react";

const CityName = ({ data }) => {
  const { main, name, sys, weather } = data;

  const date = new Date();
  const formatDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
  });
  return (
    <div class="header__left">
      <div className="header__left__top">
        <h1 className="temperature">
          {Math.round(main.temp_min)}
          <sup>ºC</sup>
        </h1>
        <div>
          <h1 className="city">
            {name.toUpperCase()}{" "}
            <span className="city__country">{sys.country}</span>
          </h1>
          <h2 className="weather-type">
            {weather[0].description.toUpperCase()}
          </h2>
        </div>
      </div>
      <div className="header__left__bottom">
        <p>{formatDate.format(date)}</p>
      </div>
    </div>
  );
};

export default CityName;
