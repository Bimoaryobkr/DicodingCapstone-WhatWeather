import React from "react";

function APILink() {
    return (
        <div>
            <h1 className="text-center mb-4">Link Source API</h1>
            <div className="w-auto list-group list_group_api shadow">
                <a className="list-group-item list-group-item-action" href="https://openweathermap.org/">
                    <div className="d-flex justify-content-between w-100">
                        <h4 className="mb-1">OpenWeatherMap</h4>
                    </div>
                    <p className="mb-1">Situs OpenWeather Map</p>
                    <small className="mb-1">Akses Gratis maupun Berbayar, Membutuhkan API Key, Memiliki fitur sesuai dengan paket yang dipilih </small>
                </a>
                <a className="list-group-item list-group-item-action" href="https://ipapi.co/api/">
                    <div className="d-flex justify-content-between w-100">
                        <h4 className="mb-1">IP Geolocation</h4>
                    </div>
                    <p className="mb-1">Situs IP Geolocation</p>
                    <small className="mb-1">Akses Gratis, Tidak memerlukan API Key</small>
                </a>
            </div>
        </div>
    )
}

export default APILink;