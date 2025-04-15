import React, { useState } from "react";
import { fetchCityWeather } from "../hooks/useFetchCity";

const CityInput = ({ setCityQuery }) => {
  const [inputCity, setInputCity] = useState("");

  const handleFetchCity = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      console.log(inputCity);
      setCityQuery(inputCity.trim());
      fetchCityWeather(inputCity);
    }
  };

  return (
    <div className="input">
      <form className="input__form" onSubmit={handleFetchCity}>
        <div className="input__form__input">
          <input type="text" onChange={(e) => setInputCity(e.target.value)} />
          <button type="submit" class="fa-solid fa-magnifying-glass"></button>
        </div>
      </form>
    </div>
  );
};

export default CityInput;
