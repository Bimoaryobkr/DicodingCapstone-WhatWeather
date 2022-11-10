import React from "react";
import openweather from '../assets/icons/OpenWeather.jpg';

function APIPage() {
    return (
        <section className="container pt-3">
            <div>
                <h1 className="text-center">API</h1>
                <div className="g-4 row row-cols-md-2 row-cols-1">
                    <div className="col">
                        <div className='card'>
                            <div className="card-body">
                                <img className='mb-3 api_image' variant="top" src={openweather} alt="api" />
                                <h5 className='text-center'>Open Weather API</h5>
                                <p>
                                    OpenWeatherMap adalah sebuah API yang berisi data-data cuaca dari berbagai kota di
                                    seluruh penjuru dunia. API ini dapat mengecek cuaca saat ini, hingga melakukan prakiraan
                                    cuaca. Tentunya cukup banyak fitur yang diberikan tergantung paket pilihan yang dipilih dengan
                                    harga yang berbeda-beda.
                                </p>
                                <p>
                                    Untuk mengakses API tersebut, dapat dilihat pada bagian ini.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card'>
                            <div className="card-body">
                                <img className='mb-3 api_image' variant="top" src={openweather} alt="api" />
                                <h5 className='text-center'>IP Geolocation API</h5>
                                <p>
                                    IP Geolocation adalah sebuah API yang memberikan informasi mengenai
                                    keberadaan IP pengguna pada perangkat. API ini digunakan sebagai parameter
                                    default untuk pencarian kota pada perangkat pengguna.
                                </p>
                                <p>
                                    Untuk mengakses API tersebut, dapat dilihat pada bagian ini.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default APIPage;