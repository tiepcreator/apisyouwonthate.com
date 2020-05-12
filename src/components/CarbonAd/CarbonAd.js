import React, { useEffect, useRef } from 'react';

import './CarbonAds.css';

const CarbonAd = () => {
  const scriptEl = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      '//cdn.carbonads.com/carbon.js?serve=CE7IV2QN&placement=apisyouwonthatecom';
    script.id = '_carbonads_js';
    scriptEl.current.appendChild(script);
  }, []);

  return <div ref={scriptEl} />;
};

export default CarbonAd;
