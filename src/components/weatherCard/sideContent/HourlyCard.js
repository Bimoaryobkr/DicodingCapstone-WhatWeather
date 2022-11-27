import React from 'react';
import { WiDayFog } from 'react-icons/wi';

function HourlyCard({ weatherInfo, onClick }) {
  return (
    <div onClick={onClick} className='hourly-card col align-items-center justify-content-center text-center'>
      <p className='font-weight-light'>{weatherInfo.name}</p>
      <WiDayFog className='weather_icon' size={75} />
      <p>{weatherInfo.time}</p>
    </div>
  );
}

export default HourlyCard;
