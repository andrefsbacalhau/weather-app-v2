import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherByCity } from "./hooks/useFetchCity";
import CityInput from "./components/Header/CityInput";
import { dinamicBackground } from "./utils/dinamicBackground";
import CityWeatherDetails from "./components/Info/CityWeatherDetails";
import CityForecast from "./components/Info/CityForecast";
import Loading from "./components/Loading";
import CityName from "./components/Header/CityName";
import Error from "./components/Error";

const App = () => {
  const [cityQuery, setCityQuery] = useState("Lisbon");
  const { data, isLoading, isFetching, isPending, isError, error } = useQuery({
    queryKey: ["cityWeather", cityQuery],
    queryFn: () => fetchWeatherByCity(cityQuery),
  });

  if (isLoading) return <Loading text={"Loading"} />; //when we have no data
  if (isFetching) return <Loading text={"Fetching"} />; //when we already have data
  if (isPending) return <Loading text={"Pending"} />;

  if (isError) {
    if (error.status === 404) {
      return <Error text={`Sorry, we couldn't find a city by that name.`} />;
    } else {
      return <Error text={`Something went wrong: ${error.message}`} />;
    }
  }

  return (
    <div className="app">
      <div className="app__bg">
        <img src={dinamicBackground(data?.current.weather[0].main)} alt="" />
      </div>
      <div className="app__container">
        <div className="app__container__tsection">
          <CityName data={data.current} />
          <CityInput setCityQuery={setCityQuery} />
        </div>
        <div className="app__container__msection">
          <CityWeatherDetails weather={data.current} />
          <CityForecast forecast={data.forecast} />
        </div>
      </div>
    </div>
  );
};

export default App;
