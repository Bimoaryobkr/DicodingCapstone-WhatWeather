import React from "react";
import WeatherCardGuide from "../components/WeatherCardGuide";
import WeatherCard from '../components/weatherCard/WeatherCard';
import getWeather from '../utils/dataSource';


function Guide(){
    const [weathers, setWeathers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

      React.useEffect(() => {
        const fetchWeather = async () => {
          const weathersResponse = await getWeather();
          setWeathers(weathersResponse);
        }
    
        fetchWeather().then(() => setLoading(false));
      }, []);
    return(
            loading ? null : 

        <><div>
            <div className="home_header border-bottom">
                <h1>Panduan</h1>
            </div>
            <div className="home_example mt-3">
            <h5>Cara membaca Prakiraan Cuaca</h5>
            <p>Halaman ini menjelaskan simbol cuaca dan data prakiraan kami, yang akan membantu Anda mendapatkan pembacaan prakiraan yang lebih akurat.</p>
            </div>
            <WeatherCardGuide weathers={weathers}/>
        </div>
        </>
    )
}

export default Guide;