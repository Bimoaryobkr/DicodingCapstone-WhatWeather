import React from 'react';
import CardAside from './mainContent/CardAside';
import CardMain from './mainContent/CardMain';
import HourlyReport from './sideContent/HourlyReport';
import DetailChart from '../DetailChart';
import DataFormat from '../../utils/dataFormat';

function WeatherCard({ weathers }) {
  const [primaryWeather, setPrimaryWeather] = React.useState(weathers[0]);
  const weatherDataset = DataFormat.formatWeatherDataset(weathers);

  const onClick = (weatherDate) => {
    const selectedWeather = weathers.filter(weather => weather.dt === weatherDate)[0];
    setPrimaryWeather(selectedWeather);
  };

  const detailOnClick = (event) => {
    event.stopPropagation();
    const detailChart = document.querySelector('.detail-chart-wrapper');
    detailChart.classList.add('detail-chart-wrapper--visible');
    document.body.classList.add('--disable-scroll');
  };

  React.useEffect(() => {
    setPrimaryWeather(weathers[0]);
  }, [weathers]);

  return (
    <div className='container'>
      <div className='card mt-5 mb-2 weather_card py-1 shadow'>
        <div className='card-body'>
          <h3 className='header_card'>Cuaca Saat Ini</h3>
          <div className='row align-items-center g-5'>
            <CardMain {...primaryWeather} />
            <CardAside {...primaryWeather.weatherInfo} />
          </div>
        </div>
      </div>
      <HourlyReport weathers={weathers} onClick={onClick} />
      <div className='text-center my-3'>
        <button onClick={detailOnClick} type='button' className='btn btn-dark'>Detail Suhu</button>
        <DetailChart weatherData={weatherDataset} />
      </div>
    </div>

  )
}

export default WeatherCard;