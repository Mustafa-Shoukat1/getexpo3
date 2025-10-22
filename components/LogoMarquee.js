'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

const LogoMarquee = ({ logos = [], speed = 50, direction = 'left', pauseOnHover = false }) => {
  // Create just one duplicate set for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <Marquee 
      speed={speed} 
      direction={direction} 
      pauseOnHover={pauseOnHover} 
      gradient={false}
      className="overflow-hidden"
    >
      {duplicatedLogos.map((logo, index) => (
        <div key={index} className="flex items-center  mx-10 xl:mx-[4vw]">
          <img
            src={logo}
            alt={`logo-${index}`}
            className=" w-[60px] xl:w-[5vw] object-cover object-center"
            loading="lazy" // Add lazy loading for better performance
          />
        </div>
      ))}
    </Marquee>
  );
};

export default LogoMarquee;