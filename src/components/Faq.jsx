import React from 'react';
import "./HeroSection.css"


const FAQ = () => {
  return (

    <div className="sidebar">
        <div className='sideLeft'>
    <div className="sidebar-item active">Eligibility</div>
    <div className="sidebar-item">How To Use?</div>
    <div className="sidebar-item">Terms & Conditions</div>
    </div>
    <div className="faq-content">
      <h1>Frequently Asked <span className="highlight">Questions</span></h1>
      <div className="faq-item">
        <div className="faq-question faq-question1">
          Do I need to have prior Product Management and Project Management experience to enroll in the program?
        </div>
        <div className="faq-answer">
          No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-question faq-question2">
          What is the minimum system configuration required?
        </div>
      </div>
      </div>

    </div>
  

  
  );
};

export default FAQ;
