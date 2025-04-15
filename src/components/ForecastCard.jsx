import React from "react";

const ForecastCard = ({ day }) => {
  const { date, item } = day;

  return (
    <div className="forecast">
      <h2 className="forecast__day">{date}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt=""
        className="forecast__icon"
      />
      <p className="forecast__temperature">{Math.round(item.main.temp)}ºC</p>
      <p className="forecast__weather">{item.weather[0].main.toUpperCase()}</p>
    </div>
  );
};

export default ForecastCard;
