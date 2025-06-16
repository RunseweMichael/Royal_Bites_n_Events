import React, { useState, useRef } from 'react';
import videoFile from './assets/royalsVideo (2).mp4';
import {motion} from 'framer-motion';
import {fadeIn} from '../src/framerMotion/Variants'

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 0);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    videoRef.current.currentTime = 0; 
  };

  return (
    <div className='video-container'>
      <div className='ceo-text'>

        <motion.p
        variants={fadeIn('down', 0.5)}
        initial = 'hidden'
        whileInView = 'show'
        viewport = {{once: false, amount:0}}
        >At Royal Bites n' Events, we create exceptional events. I'm <mark style={{color: 'orangered', fontWeight: 'extrabold', background: 'none', textShadow: 'none', fontStyle: 'italic'}}>Esther Runsewe</mark> (CEO), and my team looks forward to crafting unforgettable experiences for you. From weddings to corporate events, we handle every detail with care and creativity.
        </motion.p>
      </div>

      <div className="video-wrapper">
        {!isPlaying ? (
          <div className="play-button" onClick={handlePlay}>
            <div className="play-ring"></div>
            <div className="play-icon">&#9658;</div>
          </div>
        ) : (
          <video
            ref={videoRef}
            src={videoFile}
            className="video-thumbnail"
            controls
            autoPlay
            onEnded={handleEnded} // 👈 Reset view on finish
          />
        )}
      </div>
    </div>
  );
}
