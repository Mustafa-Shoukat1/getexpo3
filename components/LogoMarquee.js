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
        <div key={index} className="flex items-center  mx-10 xl:mx-[4vw]">
          <Image
            src={logo}
            alt={`logo-${index}`}
            width={80}
            height={40}
            className=" w-[60px] xl:w-[5vw] object-cover object-center"
          />
        </div>
      ))}
    </Marquee>
  );
};

export default LogoMarquee;