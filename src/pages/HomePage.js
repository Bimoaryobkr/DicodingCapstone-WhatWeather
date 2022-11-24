import React from "react";
import Search from '../components/search';
import WeatherCard from '../components/weatherCard/WeatherCard';

function HomePage() {
  return (
    <section className="container pt-3">
      <div className="home_header border-bottom">
        <h1>WhatWeather</h1>
      </div>
      <div className="home_example mt-3">
        <h5>Cara melakukan pencarian</h5>
        <small>
          Silahkan melakukan pencarian dengan menggunakan nama kota. Untuk hasil
          yang lebih tepat gunakan nama kota beri koma kemudian 2 kode negaranya.
          Sebagai contoh Jakarta, ID.
        </small>
      </div>
      <Search />
      <WeatherCard />
    </section>
  )
}

export default HomePage;