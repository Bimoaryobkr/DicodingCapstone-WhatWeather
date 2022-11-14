import React from "react";
import profile from '../assets/icons/ProfilePicture.jpg';
import kelvin from '../assets/images/kelvin.jpg';
import bimo from '../assets/images/bimo.png';
import globe from '../assets/images/globe.png';
import device from '../assets/images/Perangkat.png';
import forecast from '../assets/images/Forecast.png';
import * as Icon from 'react-bootstrap-icons';

function AboutUsPage() {
    return (
        <section className="container pt-3">
            <div>
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
            <div className="text-center mb-3">
                <h2>Team Developer</h2>
            </div>
            <div className="pt-3">
                <div className="g-4 row row-cols-lg-2 row-cols-1 profile w-auto">
                    <div className="col">
                        <div className='card'>
                            <div className='card-body'>
                                <img className='image_profile mb-3 rounded-circle' variant="top" src={profile} alt="profile" />
                                <h5 className='text-center pb-3'>Muhammad Aldino Ruswandi</h5>
                                <p className='text-center'>Universitas </p>
                                <p className='text-center'>Prodi</p>
                                <div className='media_icon text-center'>
                                    <div className="g-1 row row-cols-2 row-cols-1">
                                        <div className="col">
                                            <a href="https://www.linkedin.com/in/bimo-aryo-bramantyo-kr"><Icon.Linkedin size={42} /></a>
                                        </div>
                                        <div className="col">
                                            <a href="https://github.com/Bimoaryobkr"><Icon.Github size={42} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card'>
                            <div className='card-body'>
                                <img className='image_profile mb-3 rounded-circle' variant="top" src={profile} alt="profile" />
                                <h5 className='text-center pb-3'>Adjie Satria Anggara</h5>
                                <p className='text-center'>Universitas </p>
                                <p className='text-center'>Prodi</p>
                                <div className='media_icon text-center'>
                                    <div className="g-1 row row-cols-2 row-cols-1">
                                        <div className="col">
                                            <a href="https://www.linkedin.com/in/bimo-aryo-bramantyo-kr"><Icon.Linkedin size={42} /></a>
                                        </div>
                                        <div className="col">
                                            <a href="https://github.com/Bimoaryobkr"><Icon.Github size={42} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card'>
                            <div className='card-body'>
                                <img className='image_profile mb-3 rounded-circle' variant="top" src={kelvin} alt="profile" />
                                <h5 className='text-center pb-3'>Kelvin Kurniawan</h5>
                                <p className='text-center'>Universitas </p>
                                <p className='text-center'>Prodi</p>
                                <div className='media_icon text-center'>
                                    <div className="g-1 row row-cols-2 row-cols-1">
                                        <div className="col">
                                            <a href="https://www.linkedin.com/in/bimo-aryo-bramantyo-kr"><Icon.Linkedin size={42} /></a>
                                        </div>
                                        <div className="col">
                                            <a href="https://github.com/Bimoaryobkr"><Icon.Github size={42} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card'>
                            <div className='card-body'>
                                <img className='image_profile mb-3 rounded-circle' variant="top" src={bimo} alt="profile" />
                                <h5 className='text-center pb-3'>Bimo Aryo Bramantyo KR</h5>
                                <p className='text-center'>Universitas Negeri Semarang</p>
                                <p className='text-center'>Teknik Informatika</p>
                                <div className='media_icon text-center'>
                                    <div className="g-1 row row-cols-2 row-cols-1">
                                        <div className="col">
                                            <a href="https://www.linkedin.com/in/bimo-aryo-bramantyo-kr"><Icon.Linkedin size={42} /></a>
                                        </div>
                                        <div className="col">
                                            <a href="https://github.com/Bimoaryobkr"><Icon.Github size={42} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 w-auto feature">
                <h2 className='text-center'>Kenapa WhatWeather?</h2>
                <hr></hr>
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h2>Pencarian kondisi cuaca yang mudah</h2>
                        <p className="lead">Pencarian informasi mengenai cuaca yang mudah, berdasarkan nama kota yang ada di seluruh dunia.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg image img-fluid mx-auto" src={globe} alt="feature" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
                <hr></hr>
                <div className="row align-items-center">
                    <div className="order-md-2 col-md-7">
                        <h2>Terdapat prakiraan cuaca untuk 3 jam kedepan</h2>
                        <p className="lead">
                            Tidak hanya cuaca saat ini, Anda dapat melihat daftar prakiraan cuaca pada kota yang Anda cari
                            untuk 3 jam kedepan.
                        </p>
                    </div>
                    <div className="order-md-1 col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg image img-fluid mx-auto" src={forecast} alt="feature" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
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
                        <img className="bd-placeholder-img bd-placeholder-img-lg image img-fluid mx-auto" src={device} alt="feature" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
                <hr></hr>
            </div>
        </section>
    )
}

export default AboutUsPage;
