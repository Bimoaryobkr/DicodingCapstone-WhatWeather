import React from 'react';
import { WiDayFog } from 'react-icons/wi';

function CardMain({ city, country, weatherInfo }) {
  return (
    <div className="col-md-6">
      <h4 className="text-center mt-3">{city}</h4>
      <p className="text-center time pb-3">{country}, {weatherInfo.time}</p>
      <div className="text-center">
        <WiDayFog className="weather_icon" size={150} />
      </div>
      <h2 className="text-center mt-4 mb-4">{weatherInfo.name}</h2>
    </div>
  );
}

export default CardMain;
