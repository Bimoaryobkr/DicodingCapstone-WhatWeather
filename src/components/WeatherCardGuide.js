import React from "react";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { WiThermometerExterior } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import DetailChart from "./DetailChart";
import DataFormat from "../utils/dataFormat";

function WeatherCardGuide({ weathers }) {

    const weatherDataset = DataFormat.formatWeatherDataset(weathers);

    const detailOnClick = (event) => {
        event.stopPropagation();
        const detailChart = document.querySelector('.detail-chart-wrapper');
        detailChart.classList.add('detail-chart-wrapper--visible');
        document.body.classList.add('--disable-scroll');
    };


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
                                    <img src={`https://openweathermap.org/img/wn/01d@2x.png`} alt="" size={80} />
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
                        <p className="header_card_guide"><img src={`https://openweathermap.org/img/wn/01d@2x.png`} alt="" size={35} /> <b>'Sunny'</b> menunjukkan kondisi cuaca terkini.
                            <br></br> <WiThermometer className="weather_icon" size={35} /> <b>'Suhu'</b> mengacu pada suhu udara dalam satuan celcius
                            <br></br> <WiThermometerExterior className="weather_icon" size={35} /> <b>'feels like'</b> indikasi yang lebih
                            representatif tentang bagaimana suhu akan terasa
                            <br></br> <WiStrongWind className="weather_icon" size={35} /> <b>'kecepatan'</b> yaitu kecepatan angin rata-rata yang mungkin Anda temui
                            <br></br> <WiHumidity className="weather_icon" size={35} /> <b>'kelembapan'</b> yaitu konsentrasi kandungan dari uap air yang ada di udara</p>
                    </div>

                    <div className="card-body container-display">
                        <h5><b>Daftar Weather Symbol</b></h5>
                        <div className="row align-items-center column-display">
                            <div className="col-md-3 column-display">
                                <div className="col align-items-center justify-content-center text-center w-symbol shadow">
                                    <img src={`https://openweathermap.org/img/wn/11d@2x.png`} alt="" size={50} />
                                    <p className="font-weight-light">Lightning</p>
                                </div>
                                <div className="col align-items-center justify-content-center text-center w-symbol shadow">
                                    <img src={`https://openweathermap.org/img/wn/13d@2x.png`} alt="" size={50} />
                                    <p className="font-weight-light">Snow</p>
                                </div>
                                <div className="col align-items-center justify-content-center text-center w-symbol shadow">
                                    <img src={`https://openweathermap.org/img/wn/50d@2x.png`} alt="" size={50} />
                                    <p className="font-weight-light">Fog</p>
                                </div>
                            </div>
                            <div className="col-md-3 column-display">
                                <div className="col align-items-center justify-content-center text-center w-symbol shadow">
                                    <img src={`https://openweathermap.org/img/wn/01d@2x.png`} alt="" size={50} />
                                    <p className="font-weight-light">Sunny</p>
                                </div>
                                <div className="col align-items-center justify-content-center text-center w-symbol shadow">
                                    <img src={`https://openweathermap.org/img/wn/02d@2x.png`} alt="" size={50} />
                                    <p className="font-weight-light">Cloudy</p>
                                </div>
                                <div className="col align-items-center justify-content-center text-center w-symbol shadow">
                                    <img src={`https://openweathermap.org/img/wn/10d@2x.png`} alt="" size={50} />
                                    <p className="font-weight-light">Rain</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-top border-bottom"></div>
                    </div>
                    <div className="g-3 row row-cols-md-3 row-cols-1 mt-1">

                    </div>
                </div>

                <h2>4. Membaca Prakiraan per Jam</h2>
                <div className="card mt-5 mb-2 weather_card py-1 shadow">
                    <div className="card-body">
                        <div className="header_forecast">
                            <h5>Prakiraan Cuaca per Jam</h5>
                        </div>
                        <div className="border-top border-bottom">
                            <div className="g-4 row row-cols-md-4 row-cols-1 mt-1">

                                <div className='hourly-card col align-items-center justify-content-center text-center'>
                                    <p className='font-weight-light'>Rain</p>
                                    <img src={`https://openweathermap.org/img/wn/10d@2x.png`} alt="" size={50} />
                                    <p>10.32</p>
                                </div>
                                <div className='hourly-card col align-items-center justify-content-center text-center'>
                                    <p className='font-weight-light'>Cloudy</p>
                                    <img src={`https://openweathermap.org/img/wn/02d@2x.png`} alt="" size={50} />
                                    <p>11.00</p>
                                </div>
                                <div className='hourly-card col align-items-center justify-content-center text-center'>
                                    <p className='font-weight-light'>Cloudy</p>
                                    <img src={`https://openweathermap.org/img/wn/02d@2x.png`} alt="" size={50} />
                                    <p>14.00</p>
                                </div>
                                <div className='hourly-card col align-items-center justify-content-center text-center'>
                                    <p className='font-weight-light'>Sunny</p>
                                    <img src={`https://openweathermap.org/img/wn/01d@2x.png`} alt="" size={50} />
                                    <p>17.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='text-center my-3'>
                    <button onClick={detailOnClick} type='button' className='btn'>Detail Suhu</button>
                    <DetailChart weatherData={weatherDataset} />
                </div>

                <div className="card mt-4 mb-4 weather_card py-1 card_desc">
                    <div className="card_desc">
                        <p className="header_card_guide">Bagian ini menunjukkan 4 informasi <b>'Prakiraan cuaca'</b> di waktu yang akan datang dengan masing-masing interval waktu selama 3 jam. Prakiraan cuaca ini akan membantu anda mempersiapkan diri untuk menghadapi cuaca yang akan datang.</p>
                        <img className='chart-img mb-3' variant="top" src="/images/chart.png" alt="chart" />
                        <p>Anda dapat klik tombol <b>Detail Suhu</b> diatas. Tombol tersebut akan memunculkan <em>pop-up chart</em> yang menunjukkan informasi mengenai prakiraan puncak suhu tertinggi dan terendah beberapa jam kedepan dalam bentuk grafik. </p>
                        <p>Sumbu <b>X</b> melambangkan waktu dengan interval waktu 3 jam, sedangkan sumbu <b>Y</b> melambangkan besar suhu dalam satuan celcius.</p>
                        <p>Grafik <em>chart</em> tersebut mempunyai tiga filter yang anda dapat klik untuk membantu anda melihat masing-masing titik terendah, utama dan tertinggi.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WeatherCardGuide;