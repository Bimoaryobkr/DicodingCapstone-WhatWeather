import React from "react";
import Search from '../components/Search';

function HomePage() {
    return (
        <section className="container pt-3">
            <div className="home_header border-bottom">
                <h1>WhatWeather</h1>
            </div>
            <Search />
        </section>
    )
}

export default HomePage;