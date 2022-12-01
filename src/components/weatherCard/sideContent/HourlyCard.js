import React from 'react';

function HourlyCard({ weatherInfo, onClick }) {
  return (
    <div onClick={onClick} className='hourly-card col align-items-center justify-content-center text-center'>
      <p className='font-weight-light'>{weatherInfo.name}</p>
      <img src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`} alt="" />
      <p>{weatherInfo.time}</p>
    </div>
  );
}

export default HourlyCard;
