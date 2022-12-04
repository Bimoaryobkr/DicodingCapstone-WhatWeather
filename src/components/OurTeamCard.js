import React from "react";
import profile from '../assets/icons/ProfilePicture.jpg';
import * as Icon from 'react-bootstrap-icons';

function TeamCard() {
    return (
        <div>
            <div className="dev_title text-center mb-3">
                <h2>Team Developer</h2>
            </div>
            <div className="pt-3 mb-5">
                <div className="g-4 row row-cols-md-2 row-cols-1 profile w-auto">
                    <div className="col">
                        <div className='card shadow border-0'>
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
                        <div className='card shadow border-0'>
                            <div className='card-body'>
                                <img className='image_profile mb-3 rounded-circle' variant="top" src="/images/aji.png" alt="profile" />
                                <h5 className='text-center pb-3'>Adjie Satria Anggara</h5>
                                <p className='text-center'>STIKI Malang</p>
                                <p className='text-center'>Sistem Informasi Manajemen</p>
                                <div className='media_icon text-center'>
                                    <div className="g-1 row row-cols-2 row-cols-1">
                                        <div className="col">
                                            <a href="https://www.linkedin.com/in/asatrianggara/"><Icon.Linkedin size={42} /></a>
                                        </div>
                                        <div className="col">
                                            <a href="https://github.com/asatrianggara"><Icon.Github size={42} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card shadow border-0'>
                            <div className='card-body'>
                                <img className='image_profile mb-3 rounded-circle' variant="top" src="/images/kelvin.png" alt="profile" />
                                <h5 className='text-center pb-3'>Kelvin Kurniawan</h5>
                                <p className='text-center'>Universitas Teknologi Digital Indonesia</p>
                                <p className='text-center'>Sistem Informasi</p>
                                <div className='media_icon text-center'>
                                    <div className="g-1 row row-cols-2 row-cols-1">
                                        <div className="col">
                                            <a href="https://www.linkedin.com/in/kelvin-kurniawan-a54204252/"><Icon.Linkedin size={42} /></a>
                                        </div>
                                        <div className="col">
                                            <a href="https://github.com/kelvin-kur"><Icon.Github size={42} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card shadow border-0'>
                            <div className='card-body'>
                                <img className='image_profile mb-3 rounded-circle' variant="top" src="/images/bimo.png" alt="profile" />
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
        </div>
    )
}

export default TeamCard;