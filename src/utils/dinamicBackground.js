import Clear from "../assets/images/clear.jpg";
import Rain from "../assets/images/rain.jpg";
import Haze from "../assets/images/haze.jpg";
import Clouds from "../assets/images/clouds.jpg";
import Snow from "../assets/images/snow.jpg";

export const dinamicBackground = (str) => {
  switch (str) {
    case "Clouds":
      return Clouds;
    case "Rain":
      return Rain;
    case "Drizzle":
      return Rain;
    case "Clear":
      return Clear;
    case "Haze":
      return Haze;
    case "Fog":
      return Haze;
    case "Snow":
      return Snow;
    default:
      return Clear;
  }
};
