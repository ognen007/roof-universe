import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;