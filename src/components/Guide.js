import React from "react";
import WeatherCardGuide from "../components/WeatherCardGuide";

function Guide(){
    return(
        <><div>
            <div className="home_header border-bottom">
                <h1>Panduan</h1>
            </div>
            <div className="home_example mt-3">
            <h5>Cara membaca Prakiraan Cuaca</h5>
            <p>Halaman ini menjelaskan simbol cuaca dan data prakiraan kami, yang akan membantu Anda mendapatkan pembacaan prakiraan yang lebih akurat.</p>
            </div>
            <WeatherCardGuide />
        </div>
        </>
    )
}

export default Guide;