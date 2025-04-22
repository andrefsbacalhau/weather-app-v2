import React from "react";

const CityWeatherDetails = ({ weather }) => {
  const { main, wind } = weather;
  return (
    <div className="weather-details">
      <p>Thermal Sensation: {Math.round(main.feels_like)}ºC</p>
      <p>Lowest: {Math.round(main.temp_min)}ºC</p>
      <p>Highest: {Math.round(main.temp_max)}ºC</p>
      <p>Wind Speed: {Math.round(wind.speed)} Km/h</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} mb</p>
    </div>
  );
};

export default CityWeatherDetails;
