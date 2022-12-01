import React from 'react';

function CardMain({ city, country, weatherInfo }) {
  return (
    <div className="col-md-6">
      <h4 className="text-center mt-3">{city}</h4>
      <p className="text-center time pb-3">{country}, {weatherInfo.time}</p>
      <div className="text-center">
        <img src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`} alt="" />
      </div>
      <h2 className="text-center mt-4 mb-4">{weatherInfo.name}</h2>
    </div>
  );
}

export default CardMain;
