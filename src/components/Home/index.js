import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['O', 'w', 'e', 'n'];
  const jobArray = [
    'V', 'i', 'd', 'e', 'o', 'g', 'r', 'a', 'p', 'h', 'e', 'r', '.', ' ',
    'V', 'i', 'd', 'e', 'o', ' ', 'E', 'd', 'i', 't', 'o', 'r', '.', ' ',
    'C', 'o', 'l', 'o', 'r', 'i', 's', 't', '.'
  ];

  return (
    <div className="home-page">
      <div className="hero">
        <nav>
          {/* Add your navigation links here */}
        </nav>
        <div className="hero-content">
          <h1>Hi,<br />my name is Owen and I'm a videographer.</h1>
          <h2>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
          </h2>
          <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
        <section className="portfolio-snippets">
          <h2>Portfolio Snippets</h2>
          <div className="snippets-grid">
            <div className="snippet">
              <video controls>
                <source src={require('../../assets/videos/Untitled video - Made with Clipchamp (1).mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
            </div>
            <div className="snippet">
              <video controls>
                <source src={require('../../assets/videos/Untitled video - Made with Clipchamp (2).mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
            </div>
            <div className="snippet">
              <video controls>
                <source src={require('../../assets/videos/Untitled video - Made with Clipchamp (3).mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
            </div>
            <div className="snippet">
              <video controls>
                <source src={require('../../assets/videos/Untitled video - Made with Clipchamp.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
             
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;