import React from 'react';
import { WiStrongWind } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';
import { WiThermometerExterior } from 'react-icons/wi';
import { WiThermometer } from 'react-icons/wi';

function CardAside({ temp, feelsLike, wind, humidity }) {
  return (
    <div className='col-md-6'>
      <div>
        <WiThermometer className='weather_icon' size={35} />
        <span> Suhu : {temp.main}<sup>°</sup></span>
      </div>
      <div>
        <WiThermometerExterior className='weather_icon' size={35} />
        <span> Terasa seperti : {feelsLike}<sup>°</sup></span>
      </div>
      <div>
        <WiStrongWind className='weather_icon' size={35} />
        <span> Kecepatan : {wind} km/jam</span>
      </div>
      <div>
        <WiHumidity className='weather_icon' size={35} />
        <span> Kelembapan : {humidity}%</span>
      </div>
    </div>
  );
}

export default CardAside;
