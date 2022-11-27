class DataFormat {
  static format(weatherData) {
    const dateTimeData = this._formatDateTime({
      timezone: weatherData.timezone,
      unixEpochTime: weatherData?.dt
    });

    const weather = {
      city: weatherData.name || '',
      country: weatherData.sys.country || '',
      timezone: weatherData.timezone,
      dt: weatherData.dt,
      weatherInfo: {
        description: `${weatherData.weather[0].description[0].toUpperCase()}${weatherData.weather[0].description.slice(1)}`,
        feelsLike: weatherData.main.feels_like,
        name: weatherData.weather[0].main,
        time: dateTimeData.time,
        date: dateTimeData.date,
        temp: {
          main: weatherData.main.temp,
          high: weatherData.main.temp_max,
          low: weatherData.main.temp_min,
        },
        humidity: weatherData.main.humidity,
        wind: weatherData.wind.speed,
        pressure: weatherData.main.pressure,
      },
    };

    return weather;
  }

  static _formatDateTime({ timezone, unixEpochTime }) {
    const currentLocaleTime = new Date(unixEpochTime * 1000);

    if (Boolean(timezone) !== false) {
      currentLocaleTime.setHours((currentLocaleTime.getHours() - 7) + (timezone / 3600));
    } else {
      currentLocaleTime.setHours(currentLocaleTime.getHours() - 7);
    }

    const date = currentLocaleTime.toDateString();
    const time = currentLocaleTime.toTimeString().slice(0, 5);

    return { time, date };
  }

  static determineTimeRange({ initialTimeUnixEpoch, forecastArray }) {
    const forecastRange = [];
    const initialTime = new Date(initialTimeUnixEpoch * 1000);

    for (const hourlyData of forecastArray) {
      const hourlyDate = new Date(hourlyData.dt_txt);
      if ((hourlyDate > initialTime) && (forecastRange.length !== 3)) forecastRange.push(hourlyData);
    }

    return forecastRange;
  }
}

export default DataFormat;
