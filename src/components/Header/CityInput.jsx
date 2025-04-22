import React, { useState } from "react";
import { fetchWeatherByCity } from "../../hooks/useFetchCity";

const CityInput = ({ setCityQuery }) => {
  const [inputCity, setInputCity] = useState("");

  const handleFetchCity = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      setCityQuery(inputCity.trim());
      fetchWeatherByCity(inputCity);
    }
  };

  return (
    <div className="input">
      <form className="input__form" onSubmit={handleFetchCity}>
        <div className="input__form__input">
          <input
            type="text"
            placeholder="e.g. Lisbon"
            onChange={(e) => setInputCity(e.target.value)}
          />
          <button type="submit" class="fa-solid fa-magnifying-glass"></button>
        </div>
      </form>
    </div>
  );
};

export default CityInput;
