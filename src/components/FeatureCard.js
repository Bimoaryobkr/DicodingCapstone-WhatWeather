import React from "react";

function FeatureCard() {
    return (
        <div className="container">
            <div className="mt-4 mb-5 w-auto feature">
                <h2 className='text-center pb-3'>Kenapa <span className="fw-bolder">What</span>Weather?</h2>
                <hr></hr>
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h2>Pencarian kondisi cuaca yang mudah</h2>
                        <p className="lead">Pencarian informasi mengenai cuaca yang mudah, berdasarkan nama kota yang ada di seluruh dunia.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg image img-fluid mx-auto" src="/images/globe.png" alt="feature" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
                <hr></hr>
                <div className="row align-items-center">
                    <div className="order-md-2 col-md-7">
                        <h2>Terdapat prakiraan cuaca tiap 3 jam kedepan</h2>
                        <p className="lead">
                            Tidak hanya cuaca saat ini, Anda dapat melihat daftar prakiraan cuaca pada kota yang Anda cari
                            tiap 3 jam kedepan.
                        </p>
                    </div>
                    <div className="order-md-1 col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg image img-fluid mx-auto" src="/images/Forecast.png" alt="feature" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
                <hr></hr>
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h2>Akses yang mudah</h2>
                        <p className="lead">
                            WhatWeather dapat diakses menggunakan browser pada
                            seluruh perangkat dari Smartphone hingga Desktop.
                            (Sangat disarankan menggunakan browser Google Chrome versi terbaru)
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg image img-fluid mx-auto" src="/images/Perangkat.png" alt="feature" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default FeatureCard;