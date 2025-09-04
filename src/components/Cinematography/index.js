import React from 'react';
import './index.scss';

const Cinematography = () => {
  const videos = [
    require('../../assets/videos/Untitled video - Made with Clipchamp (11).mp4'),
    require('../../assets/videos/Untitled video - Made with Clipchamp (10).mp4'),
    require('../../assets/videos/Untitled video - Made with Clipchamp (9).mp4'),
    require('../../assets/videos/Untitled video - Made with Clipchamp (8).mp4'),
    require('../../assets/videos/Untitled video - Made with Clipchamp (7).mp4'),
    require('../../assets/videos/Untitled video - Made with Clipchamp (6).mp4'),
    require('../../assets/videos/Untitled video - Made with Clipchamp (5).mp4'),
    require('../../assets/videos/Untitled video - Made with Clipchamp (4).mp4'),
  ];

  return (
    <div className="cinematography-page">
      <h1>Cinematography</h1>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-item" key={index}>
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cinematography;