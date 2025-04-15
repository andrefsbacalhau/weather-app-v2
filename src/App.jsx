import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCityWeather } from "./hooks/useFetchCity";
import CityInput from "./components/CityInput";
import CityWeatherHeader from "./components/CityWeatherHeader";
import { dinamicBackground } from "./utils/dinamicBackground";
import CityWeatherDetails from "./components/CityWeatherDetails";
import CityForecast from "./components/CityForecast";

const App = () => {
  const [cityQuery, setCityQuery] = useState("Lisbon");
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["cityWeather", cityQuery],
    queryFn: () => fetchCityWeather(cityQuery),
  });

  if (isLoading) return <h1>Loading data...</h1>; //when we have no data
  if (isFetching) return <h1>Is Fetching...</h1>; //when we already have data
  if (isError) {
    if (error.status === 404) {
      return <h1>Sorry, we couldn't find a city by that name.</h1>;
    } else {
      return <h1>Something went wrong: {error.message}</h1>;
    }
  }

  return (
    <div className="app">
      <div className="app__bg">
        <img src={dinamicBackground(data?.weather[0].main)} alt="" />
      </div>
      <div className="app__container">
        <div className="app__container__tsection">
          <CityWeatherHeader data={data} />
          <CityInput setCityQuery={setCityQuery} />
        </div>
        <div className="app__container__msection">
          <CityWeatherDetails data={data} />
        </div>
        <div className="app__container__bsection">
          <CityForecast cityQuery={cityQuery} />
        </div>
      </div>
    </div>
  );
};

export default App;
