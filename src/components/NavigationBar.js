import React from "react";
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <header className="navigation_bar">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark pt-3 pb-3">
        <div className="container-fluid container navbar_container">
          <Link className="navbar-brand" to="/">WhatWeather</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="basic-navbar-nav">
            <ul className="ms-auto navbar-nav">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/guide/">Guide</Link>
              <Link className="nav-link" to="/api/">API</Link>
              <Link className="nav-link" to="/about-us/">About Us</Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default BasicExample;