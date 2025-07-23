import React from 'react';
import Button from '../Button';

const HeroSection = () => {
  return (
    <div className="flex flex-col mt-14 lg:flex-row ml-6 md:p-8 lg:p-0">
      <div className="flex flex-col items-center lg:items-start justify-center w-full p-8 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-4">
          Bookings
          <br /> are {' '}
          <span className="relative inline-block pl-3 text-tertiary">
            LIVE!
            <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-secondary to-tertiary rounded-md"></span>
          </span>
        </h1>
        <p className="text-base sm:text-lg lg:text-lg text-secondary mb-8 max-w-xl mx-auto lg:mx-0">
          Plot bookings are live starting from{' '}
          <strong className="text-tertiary">$5000</strong> only!
          Book now and preserve your slot in America's #1 Housing Society!
        </p>
        <div>
           <Button value="Book Now" />
        </div>
      </div>
      <div className="relative w-full flex mt-8">
        <img
          src="/HeroSectionPic.png"
          alt="Modern House"
          className="max-w-full h-auto rounded-lg"
        />
        <div className="absolute bottom-4 left-1/2 lg:bottom lg:left-85
                      flex flex-col sm:flex-row items-center justify-center 
                      backdrop-blur-xs bg-white/65 rounded-l-xl shadow-lg 
                      p-4 sm:p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex-wrap">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <span className="text-6xl sm:text-7xl lg:text-6xl font-bold text-tertiary leading-none">50+</span>
          </div>
          <div className="text-center sm:text-left">

            <p className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-800 mb-1">Bookings made already.</p>

            <p className="text-sm sm:text-lg lg:text-md text-gray-600">Reserve your slot now!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;