import React from "react";

function WeatherCard() {
    return (
        <div className="card bg-dark text-white mt-3 weather_card py-3 my-5 shadow">
            <h2 className="text-center">Jakarta</h2>
            <p className="text-center time">ID, 09.00 WIB</p>
            <h1 className="text-center time">ICON</h1>
            <h2 className="text-center mt-4 mb-4">Sunny</h2>
            <div className="g-3 row row-cols-md-2 row-cols-1 pt-4 px-4">
                <div className="col text-center card status py-2 shadow">
                    <p>189 Derajat</p>
                    <small>Suhu</small>
                </div>
                <div className="col text-center card status py-2 shadow">
                    <p>75%</p>
                    <small>Kelembapan</small>
                </div>
            </div>
            <div className="g-3 row row-cols-1 py-3 px-4">
                <div className="text-center card status py-2 shadow">
                    <p>30 km</p>
                    <small>Angin</small>
                </div>
            </div>
            <div className="my-3 px-3">
                <div className="header_forecast border-bottom">
                    <h5>Prakiraan Cuaca per Jam</h5>
                </div>
                <div className="g-3 row row-cols-md-3 row-cols-1 mt-1">
                    <div className="col align-items-center justify-content-center text-center">
                        <small className="font-weight-light">Sunny</small>
                        <p>Icon</p>
                        <p>Temperatur</p>
                    </div>
                    <div className="col align-items-center justify-content-center text-center">
                        <small className="font-weight-light">Sunny</small>
                        <p>Icon</p>
                        <p>Temperatur</p>
                    </div>
                    <div className="col align-items-center justify-content-center text-center">
                        <small className="font-weight-light">Sunny</small>
                        <p>Icon</p>
                        <p>Temperatur</p>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-light ms-5">Detail {">>"}</button>
            </div>
        </div>
    )
}

export default WeatherCard;