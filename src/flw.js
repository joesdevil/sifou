import React, { useState } from 'react';
import FullscreenIcon from './flwi';

const FullscreenButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const element = document.documentElement;

    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) {
      exitFullscreen();
    } else {
      requestFullscreen();
    }
  };

  const requestFullscreen = () => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    }

    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    }

    setIsFullscreen(false);
  };

  return (
    <button style={{position: 'absolute',
      right: '45px',
      background: 'none',
      scale: '1.5',
      top: '75px'
    }} onClick={toggleFullscreen}>
      <FullscreenIcon isFullscreen={isFullscreen} />
    </button>
  );
};

export default FullscreenButton;
