import React from "react";

function AboutUsCard() {
    return (
        <div className="container_about_us mt-4">
            <h2 className="text-center mb-4">Tentang Kami</h2>
            <div className='w-auto about_us_text mb-4'>
                <p>
                    WhatWeather merupakan sebuah website untuk mengetahui cuaca di kota
                    saat ini berdasarkan lokasi Anda tinggal.  Terdapat informasi prakiraan cuaca
                    untuk 3 jam kedepan. Website ini dapat diakses atau
                    digunakan oleh seluruh perangkat melalui browser dan dapat di-install
                    agar lebih mudah untuk diakses oleh pengguna. Tentunya dengan website WhatWeather
                    Anda dapat melakukan persiapan yang lebih baik sebelum melakukan aktivitas di luar rumah.
                </p>
            </div>
        </div>
    )
}

export default AboutUsCard;