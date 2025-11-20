import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MetaPixelTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null; // This component does not render anything
};

export default MetaPixelTracker;