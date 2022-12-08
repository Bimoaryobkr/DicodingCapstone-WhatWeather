import React from "react";
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="hero hero_bg justify-content-center align-items-center d-flex">
            <div className="container home_hero">
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-6 justify-content-center align-items-center d-flex flex-column">
                        <div className="hero-text">
                            <h1 className="text-white" >Lakukan Pencarian Cuaca Berdasarkan Kota</h1>
                            <Link className="btn custom-btn mt-3" to="/search/">Get Started!</Link>
                            <strong className="d-block py-3 pl-5 text-white">0812-2519-7072</strong>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="hero_image">
                            <img src="images/weather-girl.png" className="img-fluid" alt="weather girl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;