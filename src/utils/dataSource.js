import API_ENDPOINTS from './apiEndpoints';
import DataFormat from './dataFormat';

const getDefaultLoc = async () => {
  const response = await fetch(API_ENDPOINTS.DEFAULT_LOC);
  const responseJson = await response.json();

  return {
    error: false, data: {
      countryCode: responseJson.country_code,
      city: responseJson.city,
      lat: responseJson.latitude,
      lon: responseJson.longitude,
    }
  };
};

const getQueriedLoc = async (city) => {
  const response = await fetch(`${API_ENDPOINTS.TARGET_LOC}?q=${city}&appid=${API_ENDPOINTS.WEATHER_API_KEY}&limit=1`);
  const responseJson = await response.json();

  if (responseJson.length === 0) {
    alert('Lokasi tersebut tidak dapat kami temukan');
    return { error: true, data: null };
  }

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
  const formattedWeather = DataFormat.format({ weatherData: currentWeatherJson, forecast: false });

  return formattedWeather;
};

const getForecastWeather = async ({ city, unixEpochTime }) => {
  const response = (Boolean(city) === false) ? await getDefaultLoc() : await getQueriedLoc(city);

  const geolocation = response.data;
  const hourlyForecastResponse = await fetch(`${API_ENDPOINTS.PERIODIC_WEATHER}?lat=${geolocation.lat}&lon=${geolocation.lon}&appid=${API_ENDPOINTS.WEATHER_API_KEY}&units=metric&cnt=8&lang=id&mode=json`);
  const hourlyForecastJson = await hourlyForecastResponse.json();
  const hourlyForecast = DataFormat.determineTimeRange({
    unixEpochTime,
    country: hourlyForecastJson.city.country,
    forecastArray: hourlyForecastJson.list
  });

  const formattedHourlyForecast = [];
  for (const weatherData of hourlyForecast) {
    weatherData.name = hourlyForecastJson.city.name;
    weatherData.sys.country = hourlyForecastJson.city.country;
    const formattedWeatherData = DataFormat.format({ weatherData, forecast: true });
    formattedHourlyForecast.push(formattedWeatherData);
  }

  return formattedHourlyForecast;
};

const getWeather = async (city) => {
  const currentWeather = await getCurrentWeather(city);
  const hourlyForecast = await getForecastWeather({ city, unixEpochTime: currentWeather.dt });
  return [currentWeather, ...hourlyForecast];
};

export default getWeather;
