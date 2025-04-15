import React from "react";

const CityWeatherHeader = ({ data }) => {
  const { name, main, sys, weather, wind } = data;
  const date = new Date();
  const formatDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
  });

  return (
    <div className="weather__header">
      <div className="weather__header__top">
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
      <div className="weather__header__bottom">{formatDate.format(date)}</div>
    </div>
  );
};

export default CityWeatherHeader;
