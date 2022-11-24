import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import APIPage from './pages/APIPage';
import GuidePage from './pages/GuidePage';
import AboutUsPage from './pages/AboutUsPage';
import PageNotFound from './pages/404';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <header className='app_header'>
          <NavigationBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/api/" element={<APIPage />} />
            <Route path="/guide/" element={<GuidePage />} />
            <Route path="/about-us/" element={<AboutUsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
