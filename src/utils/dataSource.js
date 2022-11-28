import API_ENDPOINTS from './apiEndpoints';
import DataFormat from './dataFormat';

const getDefaultLoc = async () => {
  const response = await fetch(API_ENDPOINTS.DEFAULT_LOC);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return {
    error: false, data: {
      countryCode: responseJson.countryCode,
      city: responseJson.city,
      lat: responseJson.lat,
      lon: responseJson.lon,
    }
  };
};

const getQueriedLoc = async (city) => {
  const response = await fetch(`${API_ENDPOINTS.TARGET_LOC}?q=${city}&appid=${API_ENDPOINTS.WEATHER_API_KEY}&limit=1`);
  const responseJson = await response.json();

  if (responseJson.length === 0) return { error: true, data: null };
  return {
    error: false, data: {
      countryCode: responseJson[0].country,
      city: responseJson[0].name,
      lat: responseJson[0].lat,
      lon: responseJson[0].lon,
    }
  };
};

const getCurrentWeather = async (city) => {
  const response = (Boolean(city) === false) ? await getDefaultLoc() : await getQueriedLoc(city);

  if (response.error === true) {
    alert(response.message);
    return { error: true };
  }

  const geolocation = response.data;
  const currentWeatherResponse = await fetch(`${API_ENDPOINTS.CURRENT_WEATHER}?lat=${geolocation.lat}&lon=${geolocation.lon}&appid=${API_ENDPOINTS.WEATHER_API_KEY}&units=metric&lang=id&mode=json`);
  const currentWeatherJson = await currentWeatherResponse.json();
  const formattedWeather = DataFormat.format(currentWeatherJson);

  return formattedWeather;
};

const getForecastWeather = async ({ city, initialTimeUnixEpoch }) => {
  const response = (Boolean(city) === false) ? await getDefaultLoc() : await getQueriedLoc(city);

  const geolocation = response.data;
  const hourlyForecastResponse = await fetch(`${API_ENDPOINTS.PERIODIC_WEATHER}?lat=${geolocation.lat}&lon=${geolocation.lon}&appid=${API_ENDPOINTS.WEATHER_API_KEY}&units=metric&cnt=8&lang=id&mode=json`);
  const hourlyForecastJson = await hourlyForecastResponse.json();
  const hourlyForecast = DataFormat.determineTimeRange({ initialTimeUnixEpoch, forecastArray: hourlyForecastJson.list });

  const formattedHourlyForecast = [];
  for (const weatherData of hourlyForecast) {
    weatherData.name = hourlyForecastJson.city.name;
    weatherData.sys.country = hourlyForecastJson.city.country;
    const formattedWeatherData = DataFormat.format(weatherData);
    formattedHourlyForecast.push(formattedWeatherData);
  }

  return formattedHourlyForecast;
};

const getWeather = async (city) => {
  const currentWeather = await getCurrentWeather(city);
  const timezone = currentWeather.timezone;
  const initialTimeUnixEpoch = currentWeather.dt;
  const hourlyForecast = await getForecastWeather({ city, timezone, initialTimeUnixEpoch });
  return [currentWeather, ...hourlyForecast];
};

export default getWeather;
