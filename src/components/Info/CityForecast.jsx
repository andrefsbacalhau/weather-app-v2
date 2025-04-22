import { useQuery } from "@tanstack/react-query";
import React from "react";
// import { fetchCityForecast } from "../../hooks/useFetchCity";
import ForecastCard from "./ForecastCard";
import Loading from "../Loading";

const CityForecast = ({ forecast }) => {
  // const { data, isLoading, isFetching, isError, error } = useQuery({
  //   queryKey: ["cityForecast", cityQuery],
  //   queryFn: () => fetchCityForecast(cityQuery),
  // });

  // if (isLoading) return <Loading />; //when we have no data
  // if (isFetching) return <Loading />; //when we already have data
  // if (isError) {
  //   if (error.status === 404) {
  //     return <h1>Sorry, we couldn't find a city by that name.</h1>;
  //   } else {
  //     return <h1>Something went wrong: {error.message}</h1>;
  //   }
  // }

  //Adding proper DATE tags to timestamp
  const forecastDates = [];

  forecast.list.filter((item) => {
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

  return (
    <div className="forecast-container">
      <h2>Expectation for the following days:</h2>
      <div className="forecast-cards">
        {fiveDays.slice(1, 5).map((day, index) => (
          <div key={index}>
            <ForecastCard day={day} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityForecast;
