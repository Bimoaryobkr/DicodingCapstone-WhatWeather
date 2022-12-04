import React from "react";

function APIDesc() {
    return (
        <div>
            <h1 className="text-center mt-4 mb-4">API</h1>
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
        </div>
    )
}

export default APIDesc;