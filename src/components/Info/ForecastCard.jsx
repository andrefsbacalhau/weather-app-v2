import React, { useState } from "react";

const ForecastCard = ({ day }) => {
  const { date, item } = day;
  const [dayDetailsOpen, setDayDetailsOpen] = useState(false);

  const refreshForecast = () => {
    setDayDetailsOpen(false);
    setDayDetailsOpen(!dayDetailsOpen);
    focus();
  };

  return (
    <div className="forecast" onClick={refreshForecast}>
      <h2 className="forecast__day">{date}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt=""
        className="forecast__icon"
      />
      <p className="forecast__temperature">{Math.round(item.main.temp)}ºC</p>
      <p className="forecast__weather">{item.weather[0].main.toUpperCase()}</p>
      <div className="details">
        <p>Thermal Sensation: {Math.round(item.main.feels_like)} ºC</p>
        <p>Lowest: {Math.round(item.main.temp_min)}ºC</p>
        <p>Highest: {Math.round(item.main.temp_max)}ºC</p>
        <p>Wind Speed: {Math.round(item.wind.speed)} Km/h</p>
        <p>Humidity: {item.main.humidity}%</p>
        <p>Pressure: {item.main.pressure} mb</p>
      </div>
    </div>
  );
};

export default ForecastCard;
