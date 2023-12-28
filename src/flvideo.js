import React, { useState } from 'react';
import FullscreenIcon from './flwi';


const FullscreenButtonvd = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = (e) => {
    const targetElement =e.target.parentElement.parentElement.parentElement; // Change 'test1' to the actual ID of your target element

    console.log(e.target.parentElement.parentElement.parentElement)
    if (targetElement) {
      
      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement
      ) {
        exitFullscreen();
      } else {
        requestFullscreen(targetElement);
      }
    }
  };

  const requestFullscreen = (element) => {
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
    <button
      style={{
        position: 'absolute',
        left: '15px',
        background: 'none',
         
        
      }}
      onClick={toggleFullscreen}
    >
      <i class="bi bi-arrows-fullscreen  align-middle"></i> 
    </button>
  );
};

export default FullscreenButtonvd;
