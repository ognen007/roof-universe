import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoofingEasySection from '../components/landing/RoofingEasySection';
import ContactHeroSection from '../components/landing/ContactHeroSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <RoofingEasySection />
      <ContactHeroSection />
      <Footer />
    </div>
  );
};

export default LandingPage;