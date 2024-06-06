import { OPEN_WEATHER } from "../config/urls";
import { UNITS, CACHE_TIME, COLORS } from "../config/constants";

export const getWeather = async (citycode, expireTime, cached) => {
  try {
    const key = "weatherData_" + citycode;
    const cachedData = JSON.parse(localStorage.getItem(key));
    if (
      cachedData &&
      cached &&
      cachedData.cachedTime + expireTime > Date.now().valueOf()
    ) {
      return cachedData;
    }
    const res = await fetch(
      `${OPEN_WEATHER}?id=${citycode}&appid=${process.env.REACT_APP_API_KEY || ""}&units=${UNITS}`
    );
    const data = await res.json();
    if (data.cod !== 200) {
      throw new Error(data.message);
    }
    const cacheData = {
      ...data,
      cachedTime: Date.now().valueOf(),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };

    localStorage.setItem(key, JSON.stringify(cacheData));
    return cacheData;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};