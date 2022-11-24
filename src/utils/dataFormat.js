class DataFormat {
  static format(weatherData) {
    const dateTimeData = this._formatDateTime(weatherData.timezone);

    const weather = {
      city: weatherData.name || '',
      country: weatherData.sys.country || '',
      weatherInfo: {
        description: `${weatherData.weather[0].description[0].toUpperCase()}${weatherData.weather[0].description.slice(1)}`,
        feelsLike: weatherData.main.feels_like,
        name: weatherData.weather[0].main.toLowerCase(),
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

  static _formatDateTime(timezone) {
    const currentLocaleTime = new Date();
    currentLocaleTime.setHours((new Date().getHours() - 7) + (timezone / 3600));

    const date = currentLocaleTime.toLocaleDateString('id-ID', { month: 'short', day: 'numeric' });
    const time = currentLocaleTime
      .toLocaleTimeString('id-ID', {
        hourCycle: 'h24',
        hour: 'numeric',
        minute: 'numeric'
      })
      .replace('.', ':');

    return { time, date };
  }
}

export default DataFormat;
