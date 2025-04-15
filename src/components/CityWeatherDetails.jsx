import React from "react";
import { getTime } from "../utils/getHours";

const CityWeatherDetails = ({ data }) => {
  const { main, sys, wind } = data;

  return (
    <div className="weather-details">
      <p>Thermal Sensation: {Math.round(main.feels_like)} ºC</p>
      <p>Day Minimum: {Math.round(main.temp_min)}ºC</p>
      <p>Day Máximum: {Math.round(main.temp_max)}ºC</p>
      <p>Wind Speed: {Math.round(wind.speed)} Km/h</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} mb</p>
      <p>Sunrises At: {getTime(sys.sunrise)}</p>
      <p>Sunsets At: {getTime(sys.sunset)}</p>
    </div>
  );
};

export default CityWeatherDetails;
