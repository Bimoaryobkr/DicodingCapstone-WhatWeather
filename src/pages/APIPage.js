import React from "react";

function APIPage() {
    return (
        <section className="container pt-3">
            <div>
                <h1 className="text-center mb-4">API</h1>
                <div className='w-auto api_text mb-4'>
                    <p>
                        Website ini menggunakan API dalam mengambil informasi-informasi mengenai cuaca. Dalam informasi cuaca, API
                        yang digunakan adalah API OpenWeatherMap yang dibuat oleh OpenWeather yang merupakan Team IT Expert
                        dan Data Scientist yang sudah melakukan praktik sejak 2014. API ini berisi data-data cuaca dari berbagai kota di
                        seluruh penjuru dunia. API ini dapat menelusuri cuaca saat ini, hingga melakukan prakiraan
                        cuaca. Kemudian IP Geolocation yang merupakan sebuah API yang memberikan informasi mengenai
                        lokasi keberadaan pengguna melalui IP perangkat. Ini digunakan untuk dapat menemukan lokasi perangkat
                        saat membuka website WhatWeather secara default (Tentunya tetap mengaktifkan fitur lokasi pada browser).
                    </p>
                </div>
                <h1 className="text-center mb-4">Link Source API</h1>
                <div className="w-auto list-group list_group_api">
                    <a className="list-group-item list-group-item-action" href="https://openweathermap.org/">
                        <div className="d-flex justify-content-between w-100">
                            <h4 className="mb-1">OpenWeatherMap</h4>
                        </div>
                        <p className="mb-1">Situs OpenWeather Map</p>
                        <small className="mb-1">Akses Gratis maupun Berbayar, Membutuhkan API Key, Memiliki fitur sesuai dengan paket yang dipilih </small>
                    </a>
                    <a className="list-group-item list-group-item-action" href="https://openweathermap.org/">
                        <div className="d-flex justify-content-between w-100">
                            <h4 className="mb-1">IP Geolocation</h4>
                        </div>
                        <p className="mb-1">Situs IP Geolocation</p>
                        <small className="mb-1">Akses Gratis, Tidak memerlukan API Key</small>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default APIPage;