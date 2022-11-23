import React from "react";
import { WiDayFog } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { WiThermometerExterior } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";

function WeatherCard() {
    return (
        <div className="container">
            <div className="card mt-5 mb-2 weather_card py-1 shadow">
                <div className="card-body">
                    <h3 className="header_card">Cuaca Saat Ini</h3>
                    <div className="row align-items-center g-5">
                        <div className="col-md-6">
                                <h4 className="text-center mt-3">Jakarta</h4>
                                <p className="text-center time pb-3">ID, 09.00 WIB</p>
                                <div className="text-center">
                                    <WiDayFog className="weather_icon" size={150} />
                                </div>
                                <h2 className="text-center mt-4 mb-4">Sunny</h2>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <WiThermometer className="weather_icon" size={35} />
                                <span> Suhu : 31<sup>°</sup></span>
                            </div>
                            <div>
                                <WiThermometerExterior className="weather_icon" size={35} />
                                <span> Feels Like : 30<sup>°</sup></span>
                            </div>
                            <div>
                                <WiStrongWind className="weather_icon" size={35} />
                                <span> Kecepatan : 75 km/jam</span>
                            </div>
                            <div>
                                <WiHumidity className="weather_icon" size={35} />
                                <span> Kelembapan : 45%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card px-3 weather_card shadow pt-1 pb-3">
                <div className="card-body">
                    <div className="header_forecast">
                        <h5>Prakiraan Cuaca per Jam</h5>
                    </div>
                    <div className="border-top border-bottom">
                        <div className="g-3 row row-cols-md-3 row-cols-1 mt-1">
                            <div className="col align-items-center justify-content-center text-center">
                                <p className="font-weight-light">Sunny</p>
                                <WiDayFog className="weather_icon" size={75} />
                                <p>Temperatur</p>
                            </div>
                            <div className="col align-items-center justify-content-center text-center">
                                <p className="font-weight-light">Sunny</p>
                                <WiDayFog className="weather_icon" size={75} />
                                <p>Temperatur</p>
                            </div>
                            <div className="col align-items-center justify-content-center text-center">
                                <p className="font-weight-light">Sunny</p>
                                <WiDayFog className="weather_icon" size={75} />
                                <p>Temperatur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center my-3">
                <button type="button" className="btn btn-dark">Detail {">>"}</button>
            </div>
        </div>

    )
}

export default WeatherCard;