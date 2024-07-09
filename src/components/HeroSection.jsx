
import React from 'react';
import ReferNowButton from './ReferNowButton';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-section_main'>
    <div className="hero-section">
      
      <div className="hero-content">
        <h1>Let's Learn & Earn</h1>
        <p>Get a chance to win up-to Rs. 15,000</p>
        <div className="btn1">
        <ReferNowButton />
        </div>
      </div>
      <div className="hero-image">
         <img src="/earnlern.png" alt="Hero" /> 
      </div>
      </div>

      
    </div>
  );
};

export default HeroSection;


