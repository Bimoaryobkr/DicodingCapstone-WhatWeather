import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import profile from '../assets/icons/ProfilePicture.jpg';
import * as Icon from 'react-bootstrap-icons';

function AboutUsPage() {
    return (
        <section className="container pt-3">
            <div>
                <h2 className="text-center">Tentang Kami</h2>
                <div className='w-auto ms-5 me-5'>
                    <p className='ms-5 me-5'>
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
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card className='border-0'>
                            <Card.Body>
                                <Card.Img className='mb-3 rounded-circle' variant="top" src={profile} />
                                <Card.Title className='text-center'>Muhammad Aldino Ruswandi</Card.Title>
                                <p>Universitas : Universitas </p>
                                <p>Prodi : </p>
                                <p>Angkatan : </p>
                                <div className='text-center'>
                                    <a href="https://www.linkedin.com/in/bimo-aryo-bramantyo-kr"><Icon.Linkedin size={42} /></a>
                                    <a href="https://github.com/Bimoaryobkr"><Icon.Github size={42} /></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-0'>
                            <Card.Body>
                                <Card.Img className='mb-3 rounded-circle' variant="top" src={profile} />
                                <Card.Title className='text-center'>Adjie Satria Anggara</Card.Title>
                                <p>Universitas : Universitas </p>
                                <p>Prodi : </p>
                                <p>Angkatan : </p>
                                <div className='text-center'>
                                    <a href="https://www.linkedin.com/in/bimo-aryo-bramantyo-kr"><Icon.Linkedin size={42} /></a>
                                    <a href="https://github.com/Bimoaryobkr"><Icon.Github size={42} /></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-0'>
                            <Card.Body>
                                <Card.Img className='mb-3 rounded-circle' variant="top" src={profile} />
                                <Card.Title className='text-center'>Kelvin Kurniawan</Card.Title>
                                <p>Universitas : Universitas </p>
                                <p>Prodi : </p>
                                <p>Angkatan : </p>
                                <div className='text-center'>
                                    <a href="https://www.linkedin.com/in/bimo-aryo-bramantyo-kr"><Icon.Linkedin size={42} /></a>
                                    <a href="https://github.com/Bimoaryobkr"><Icon.Github size={42} /></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-0'>
                            <Card.Body>
                                <Card.Img className='mb-3 rounded-circle' variant="top" src={profile} />
                                <Card.Title className='text-center'>Bimo Aryo Bramantyo KR</Card.Title>
                                <p>Universitas : Universitas Negeri Semarang</p>
                                <p>Prodi : Teknik Informatika</p>
                                <p>Angkatan : Angkatan 20 (2020)</p>
                                <div className='text-center'>
                                    <a href="https://www.linkedin.com/in/bimo-aryo-bramantyo-kr"><Icon.Linkedin size={42} /></a>
                                    <a href="https://github.com/Bimoaryobkr"><Icon.Github size={42} /></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default AboutUsPage;