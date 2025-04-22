import axios from "axios";

const weatherUrl = "https://api.openweathermap.org/data/2.5";
const currentWeatherUrl = `${weatherUrl}/weather`;
const forecastUrl = `${weatherUrl}/forecast`;
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchWeatherByCity = async (cityQuery) => {
  if (!cityQuery) return;

  const params = {
    q: cityQuery,
    units: "metric",
    appid: apiKey,
  };

  const [current, forecast] = await Promise.all([
    axios.get(currentWeatherUrl, { params }),
    axios.get(forecastUrl, { params }),
  ]);

  return { current: current.data, forecast: forecast.data };
};
