import React from 'react';
import { WiDayFog } from 'react-icons/wi';

function CardMain() {
  return (
    <div className="col-md-6">
      <h4 className="text-center mt-3">Jakarta</h4>
      <p className="text-center time pb-3">ID, 09.00 WIB</p>
      <div className="text-center">
        <WiDayFog className="weather_icon" size={150} />
      </div>
      <h2 className="text-center mt-4 mb-4">Sunny</h2>
    </div>
  );
}

export default CardMain;
