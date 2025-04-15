import axios from "axios";

const weatherUrl = "https://api.openweathermap.org/data/2.5";
const currentWeatherUrl = `${weatherUrl}/weather`;
const currentForecastUrl = `${weatherUrl}/forecast`;
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchCityWeather = async (cityQuery) => {
  const response = await axios.get(currentWeatherUrl, {
    params: {
      q: cityQuery,
      units: "metric",
      appid: apiKey,
    },
  });

  return response.data;
};

export const fetchCityForecast = async (cityQuery) => {
  const response = await axios.get(currentForecastUrl, {
    params: {
      q: cityQuery,
      units: "metric",
      appid: apiKey,
    },
  });

  return response.data;
};
