import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchCityForecast } from "../hooks/useFetchCity";
import ForecastCard from "./ForecastCard";

const CityForecast = ({ cityQuery }) => {
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["cityForecast", cityQuery],
    queryFn: () => fetchCityForecast(cityQuery),
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

  //Adding proper DATE tags to timestamp
  const forecastDates = [];

  data.list.filter((item) => {
    const date = new Date(item.dt * 1000);
    const dateCheck = date.toLocaleDateString("pt-PT");
    const result = forecastDates.includes(dateCheck);
    result ? item : forecastDates.push({ date: dateCheck, item: item });
  });

  //Filtering days
  const fiveDays = [];

  for (let i = 1; i < forecastDates.length; i += 8) {
    fiveDays.push(forecastDates[i]);
  }

  console.log(fiveDays);
  return (
    <div className="forecast-container">
      {fiveDays.map((day) => (
        <ForecastCard day={day} />
      ))}
    </div>
  );
};

export default CityForecast;
