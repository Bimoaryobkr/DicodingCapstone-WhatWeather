import * as moment from 'moment-timezone';

class DataFormat {
  static format({ weatherData, forecast }) {
    const dateTimeData = this._formatDateTime({
      forecast,
      country: weatherData.sys.country,
      unixEpochTime: weatherData?.dt,
      dt_txt: weatherData.dt_txt
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

  static _formatDateTime({ forecast, country, unixEpochTime, dt_txt }) {
    const regionTimezone = moment.tz.zonesForCountry(country)[0];
    const regionTime = forecast
      ? moment.tz(dt_txt, regionTimezone)
      : moment.tz((unixEpochTime * 1000), regionTimezone);

    const date = regionTime.format('MM-DD');
    const time = regionTime.format('HH:mm');

    return { time, date };
  }

  static determineTimeRange({ unixEpochTime, country, forecastArray }) {
    const forecastRange = [];
    const regionTimezone = moment.tz.zonesForCountry(country)[0];
    const locationInitTime = moment.tz((unixEpochTime * 1000), regionTimezone);

    for (const hourlyData of forecastArray) {
      const hourlyReportDatetime = moment.tz(hourlyData.dt_txt, regionTimezone);

      if ((hourlyReportDatetime.isAfter(locationInitTime)) && (forecastRange.length !== 3)) {
        forecastRange.push(hourlyData);
      }
    }

    return forecastRange;
  }

  static formatWeatherDataset(weatherData) {
    const data = {
      labels: weatherData.map((datum) => datum.weatherInfo.time),
      datasets: [
        {
          label: 'Suhu utama',
          data: weatherData.map((datum) => datum.weatherInfo.temp.main),
          backgroundColor: 'rgba(255, 228, 75, 0.3)',
          borderColor: 'rgb(255, 228, 75)',
        },
        {
          label: 'Suhu terendah',
          data: weatherData.map((datum) => datum.weatherInfo.temp.low),
          backgroundColor: 'rgba(55, 160, 235, 0.3)',
          borderColor: 'rgb(55, 160, 235)',
        },
        {
          label: 'Suhu tertinggi',
          data: weatherData.map((datum) => datum.weatherInfo.temp.high),
          backgroundColor: 'rgba(255, 85, 125, 0.3)',
          borderColor: 'rgb(255, 85, 125)',
        },
      ]
    }

    return data;
  }
}

export default DataFormat;
