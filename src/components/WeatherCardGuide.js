import React from "react";
import { WiDayCloudy, WiDayCloudyGusts, WiDayCloudyWindy, WiDayFog, WiDayLightning, WiDayRain, WiDayStormShowers, WiDaySunny } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { WiThermometerExterior } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";

function WeatherCardGuide() {
    return (

     
    <div>
        <div className="container">
            
            <h2>1. Membaca Judul</h2>
            <div className="card mt-5 mb-2 weather_card py-1 shadow">
                <div className="card-body">
                    <h3 className="header_card_guide">Cuaca Saat Ini</h3>
                    <div className="border-top border-bottom"></div>
                </div>
            </div>

            <div className="card mt-4 mb-4 weather_card py-1 card_desc">
                    <div className="card_desc">
                        <p className="header_card_guide"><b>'Saat Ini'</b> mengacu pada tanda jam terbaru. Jadi, jika Anda melihat perkiraan pada pukul 10:32, simbol cuaca untuk 'Sekarang' akan menampilkan data perkiraan untuk pukul 10:00.</p>
                    </div>
            </div>

            <h2>2. Membaca Lokasi</h2>
            <div className="card mt-5 mb-2 weather_card py-1 shadow">
                <div className="card-body">
                    <div className="row align-items-center g-5">
                        <div className="col-md-3">
                                <h4 className="text-center mt-3">Jakarta</h4>
                                <p className="text-center time pb-3">ID, 10.32 WIB</p>
                        </div>
                    </div>
                    <div className="border-top border-bottom"></div>
                </div>
            </div>

            <div className="card mt-4 mb-4 weather_card py-1 card_desc">
                    <div className="card_desc">
                        <p className="header_card_guide"><b>'Jakarta'</b> mengacu kepada lokasi anda yang terdekteksi maupun berdasarkan lokasi yang anda cari. <b>'ID'</b> mengacu pada negara lokasi anda dan <b>'10:32'</b> menunjukan jam.</p>
                    </div>
            </div>

            <h2>3. Membaca Simbol Cuaca</h2>
            <div className="card mt-5 mb-2 weather_card py-1 shadow">
                <div className="card-body">
                    <div className="row align-items-center g-5">
                        <div className="col-md-6">
                                <div className="text-center">
                                    <WiDaySunny className="weather_icon" size={80} />
                                </div>
                                <h3 className="text-center mt-4 mb-4">Sunny</h3>
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
                    <div className="border-top border-bottom"></div>
                </div>
            </div>

            <div className="card mt-4 mb-4 weather_card py-1 card_desc">
                    <div className="card_desc">
                        <p className="header_card_guide"><WiDaySunny className="weather_icon" size={35} /> <b>'Sunny'</b> menunjukkan kondisi cuaca terkini. 
                        <br></br> <WiThermometer className="weather_icon" size={35} /> <b>'Suhu'</b> mengacu pada suhu udara dalam satuan celcius
                        <br></br> <WiThermometerExterior className="weather_icon" size={35} /> <b>'feels like'</b> indikasi yang lebih 
                        representatif tentang bagaimana suhu akan terasa
                        <br></br> <WiStrongWind className="weather_icon" size={35} /> <b>'kecepatan'</b> yaitu kecepatan angin rata-rata yang mungkin Anda temui
                        <br></br> <WiHumidity className="weather_icon" size={35} /> <b>'kelembapan'</b> yaitu konsentrasi kandungan dari uap air yang ada di udara</p>
                    </div>

                    <div className="card-body container-display">
                    <h5 className="title"><b>Daftar Weather Symbol</b></h5>
                    <div className="row align-items-center column-display">
                        <div className="col-md-3 column-display">
                            <div className="col align-items-center justify-content-center text-center w-symbol">
                                <WiDayLightning className="weather_icon" size={50} />
                                <p className="font-weight-light">Lightning</p>
                            </div>
                            <div className="col align-items-center justify-content-center text-center w-symbol">
                                <WiDayStormShowers className="weather_icon" size={50} />
                                <p className="font-weight-light">Storm</p>
                            </div>
                            <div className="col align-items-center justify-content-center text-center w-symbol">
                                <WiDayCloudyWindy className="weather_icon" size={50} />
                                <p className="font-weight-light">Cloudy Windy</p>
                            </div>
                            <div className="col align-items-center justify-content-center text-center w-symbol">
                                <WiDayFog className="weather_icon" size={50} />
                                <p className="font-weight-light">Fog</p>
                            </div>
                        </div>
                        <div className="col-md-3 column-display">
                        <div className="col align-items-center justify-content-center text-center w-symbol">
                                <WiDaySunny className="weather_icon" size={50} />
                                <p className="font-weight-light">Sunny</p>
                            </div>
                            <div className="col align-items-center justify-content-center text-center w-symbol">
                                <WiDayCloudy className="weather_icon" size={50} />
                                <p className="font-weight-light">Cloudy</p>
                            </div>
                            <div className="col align-items-center justify-content-center text-center w-symbol">
                                <WiDayRain className="weather_icon" size={50} />
                                <p className="font-weight-light">Rain</p>
                            </div>
                            <div className="col align-items-center justify-content-center text-center  w-symbol">
                                <WiDayCloudyGusts className="weather_icon" size={50} />
                                <p className="font-weight-light">Cloudy Gust</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="border-top border-bottom"></div>
                </div>
                    <div className="g-3 row row-cols-md-3 row-cols-1 mt-1">
                            
                    </div>
            </div>            
        </div>
    </div>
    )
}

export default WeatherCardGuide;