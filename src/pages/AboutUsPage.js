import profile from '../assets/icons/ProfilePicture.jpg';
import * as Icon from 'react-bootstrap-icons';

function AboutUsPage() {
    return (
        <section className="container pt-3">
            <div>
                <h2 className="text-center">Tentang Kami</h2>
                <div className='w-auto ms-5 me-5'>
                    <p>
                        WhatWeather merupakan sebuah website untuk mengetahui cuaca di kota
                        saat ini dan kedepan berdasarkan lokasi Anda tinggal. Aplikasi ini dapat
                        digunakan oleh seluruh perangkat melalui browser dan dapat diinstall
                        agar lebih mudah untuk diakses oleh pengguna.
                    </p>
                </div>
            </div>
            <div className="text-center">
                <h2>Team Development</h2>
            </div>
            <div className="pt-3 ms-5 me-5">
                <div className="g-4 row row-cols-md-2 row-cols-1">
                    <div className="col">
                        <div className='card border-0'>
                            <div className='card-body'>
                                <img className='mb-3 rounded-circle' variant="top" src={profile} alt="profile" />
                                <h5 className='text-center'>Muhammad Aldino Ruswandi</h5>
                                <p>Universitas : Universitas </p>
                                <p>Prodi : </p>
                                <p>Angkatan : </p>
                                <div className='text-center'>
                                    <a href="https://www.linkedin.com/in/bimo-aryo-bramantyo-kr"><Icon.Linkedin size={42} /></a>
                                    <a href="https://github.com/Bimoaryobkr"><Icon.Github size={42} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card border-0'>
                            <div className='card-body'>
                                <img className='mb-3 rounded-circle' variant="top" src={profile} alt="profile" />
                                <h5 className='text-center'>Adjie Satria Anggara</h5>
                                <p>Universitas : Universitas </p>
                                <p>Prodi : </p>
                                <p>Angkatan : </p>
                                <div className='text-center'>
                                    <a href="https://www.linkedin.com/in/bimo-aryo-bramantyo-kr"><Icon.Linkedin size={42} /></a>
                                    <a href="https://github.com/Bimoaryobkr"><Icon.Github size={42} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card border-0'>
                            <div className='card-body'>
                                <img className='mb-3 rounded-circle' variant="top" src={profile} alt="profile" />
                                <h5 className='text-center'>Kelvin Kurniawan</h5>
                                <p>Universitas : Universitas </p>
                                <p>Prodi : </p>
                                <p>Angkatan : </p>
                                <div className='text-center'>
                                    <a href="https://www.linkedin.com/in/bimo-aryo-bramantyo-kr"><Icon.Linkedin size={42} /></a>
                                    <a href="https://github.com/Bimoaryobkr"><Icon.Github size={42} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card border-0'>
                            <div className='card-body'>
                                <img className='mb-3 rounded-circle' variant="top" src={profile} alt="profile" />
                                <h5 className='text-center'>Bimo Aryo Bramantyo KR</h5>
                                <p>Universitas : Universitas Negeri Semarang</p>
                                <p>Prodi : Teknik Informatika</p>
                                <p>Angkatan : Angkatan 20 (2020)</p>
                                <div className='text-center'>
                                    <a href="https://www.linkedin.com/in/bimo-aryo-bramantyo-kr"><Icon.Linkedin size={42} /></a>
                                    <a href="https://github.com/Bimoaryobkr"><Icon.Github size={42} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 ms-5 me-5">
                <h2 className='text-center'>Kenapa WhatWeather?</h2>
                <hr></hr>
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h2 className="heading">Pencarian cuaca yang mudah</h2>
                        <p className="lead">Pencarian cuaca yang mudah, berdasarkan nama kota yang ada diseluruh dunia.</p>
                    </div>
                    <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 300x300" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>
                <hr></hr>
                <div className="row align-items-center">
                    <div className="col-md-7 order-md-2">
                        <h2 className="heading">Terdapat prakiraan cuaca untuk 3 jam kedepan</h2>
                        <p className="lead">
                            Tidak hanya cuaca saat ini, anda mendapatkan daftar prakiraan cuaca pada kota yang Anda cari
                            untuk 3 jam kedepan.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 300x300" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>
                <hr></hr>
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h2 className="heading">Akses yang mudah</h2>
                        <p className="lead">
                            WhatWeather dapat diakses menggunakan browser pada
                            seluruh perangkat dari Handphone hingga Desktop.
                            (Sangat disarankan menggunakan browser versi terbaru)
                        </p>
                    </div>
                    <div className="col-md-5">
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 300x300" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>
                <hr></hr>
            </div>
        </section>
    )
}

export default AboutUsPage;
