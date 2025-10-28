'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

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
        <div key={index} className="flex items-center mx-12 xl:mx-[5vw]">
          <Image
            src={logo}
            alt={`logo-${index}`}
            width={120}
            height={60}
            className="w-[100px] xl:w-[8vw] object-contain object-center"
          />
        </div>
      ))}
    </Marquee>
  );
};

export default LogoMarquee;