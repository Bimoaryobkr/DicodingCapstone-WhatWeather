import React from "react";
import WeatherCardGuide from "../components/WeatherCardGuide";

function Guide(){
    return(
        <><div>
            <h1 className="text-center">Panduan</h1>
            <h4>Cara membaca Prakiraan Cuaca</h4>
            <p>Halaman ini menjelaskan simbol cuaca dan data prakiraan kami, yang akan membantu Anda mendapatkan pembacaan prakiraan yang lebih akurat.</p>
            <WeatherCardGuide />
        </div>
        </>
    )
}

export default Guide;