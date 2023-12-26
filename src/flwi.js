import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

const FullscreenIcon = ({ isFullscreen }) => {
  const icon = isFullscreen ? faCompress : faExpand;

  return <FontAwesomeIcon icon={icon} />;
};

export default FullscreenIcon;
