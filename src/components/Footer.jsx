import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="footer-title">Programs</h3>
            <ul className="footer-list">
              <li className="footer-list-item">Data Science & Al</li>
              <li className="footer-list-item">Product Management</li>
              <li className="footer-list-item">Business Analytics</li>
              <li className="footer-list-item">Digital Transformation</li>
              <li className="footer-list-item">Business Management</li>
              <li className="footer-list-item">Project Management</li>
              <li className="footer-list-item">Strategy & Leadership</li>
              <li className="footer-list-item">Senior Management</li>
              <li className="footer-list-item">Fintech</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="mailto:admissions@accredian.com">
                  Email us (For Data Science Queries)
                </a>
              </li>
              <li className="footer-list-item">
                <a href="mailto:pm@accredian.com">
                  Email us (For Product Management Queries)
                </a>
              </li>
              <li className="footer-list-item">
                Data Science Admission Helpline: +91 9079653292 (9 AM-7 PM)
              </li>
              <li className="footer-list-item">
                Product Management Admission Helpline: +91 9625811095
              </li>
              <li className="footer-list-item">
                Enrolled Student Helpline: +91 7969322507
                <br></br>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana 122015
              </li>
            </ul>
            <div className="followtxt"> Follow Us</div>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className="footer-title">Accredian</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#">Why Accredian</a>
              </li>
              <li className="footer-list-item">
                <a href="#">Master FAQs</a>
              </li>
              <li className="footer-list-item">
                <a href="#">Admission Policy</a>
              </li>
              <li className="footer-list-item">
                <a href="#">Referral Policy</a>
              </li>
              <li className="footer-list-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="footer-list-item">
                <a href="#">Terms Of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-text">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
