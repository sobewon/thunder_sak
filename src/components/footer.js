import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-text">&copy; 2023 John Magnuson Jr. "sobewon"</p>
      </div>
      <div className="footer-center">
        <a href="https://www.instagram.com/thundersak/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
        </a>
        <a href="https://www.facebook.com/thundersakmusic/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
        </a>
        <a href="https://www.tiktok.com/@thundersakband" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} className="footer-icon" />
        </a>
      </div>
      <div className="footer-right">
        <p className="footer-text">How Far How Fast Can You Run?</p>
      </div>
    </footer>
  );
};

export default Footer;
