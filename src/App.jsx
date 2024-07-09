
import React from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ReferralBenefits from './components/ReferralBenefits';
import FAQ from './components/Faq.jsx';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import '../src/styles.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ReferralBenefits />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;


