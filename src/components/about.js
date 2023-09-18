import React from 'react';
import donmatter from '../assets/donmatter.mp3';
import thunderridge from '../assets/thunderridge.jpg';
import mustard from '../assets/mustard.jpg';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="profile-section">
        <div className="profile-image">
          <img src={mustard} alt="Profile" />
        </div>
        <div className="about-text">
          <p>🌎 "How far, how fast can you run?" 🏃</p>
          <h2>Thunder Sak</h2>
          <p>Based in Tampa, FL</p>
        </div>
      </div>
      <div className="wide-image">
        <img src={thunderridge} alt="thunder ridge" />

          <audio controls>
            <source src={donmatter} type="audio/mp3" title="Kings of Leon - Don't matter" />
            Your browser does not support the audio element.
          </audio>

      </div>
      <div className="description-section">
        <h2>Thunder Sak</h2>
        <p>Band Members Include:</p>
        <p>🎸 Josh Cannon 🎸</p>
        <p>🥁 IDK THEIR NAMES 🥁</p>
        <p>🎤 PLEASE HELP 🎤</p>
      </div>
    </div>
  );
};

export default AboutPage;
