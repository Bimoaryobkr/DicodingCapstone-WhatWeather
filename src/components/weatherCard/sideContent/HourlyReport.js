import React from 'react';
import HourlyCard from './HourlyCard';

function HourlyReport({ weathers, onClick }) {
  return (
    <div className="card px-3 weather_card shadow pt-1 pb-3">
      <div className="card-body">
        <div className="header_forecast">
          <h5>Prakiraan Cuaca per Jam</h5>
        </div>
        <div className="border-top border-bottom">
          <div className="g-4 row row-cols-md-4 row-cols-1 mt-1">
            {
              weathers.map(weather => (
                <HourlyCard key={weather.dt} onClick={() => onClick(weather.dt)} {...weather} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default HourlyReport;
