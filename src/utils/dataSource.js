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
  const response = await fetch(`${API_ENDPOINTS.TARGET_LOC}?q=${city}&${API_ENDPOINTS.WEATHER_API_KEY}&limit=1`);
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
  const weatherResponse = await fetch(`${API_ENDPOINTS.CURRENT_WEATHER}?lat=${geolocation.lat}&lon=${geolocation.lon}&appid=${API_ENDPOINTS.WEATHER_API_KEY}&units=metric&mode=json`);
  const weatherResponseJson = await weatherResponse.json();
  const formattedWeather = DataFormat.format(weatherResponseJson);

  return formattedWeather;
};

export default getCurrentWeather;
