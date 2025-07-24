"use client";
import Image from 'next/image';
import Button from '../Button';
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 50;
    const duration = 4000;
    const stepTime = Math.floor(duration / end);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(counter);
    }, stepTime);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="flex flex-col mt-14 lg:flex-row ml-6 md:p-8 lg:p-0">

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center lg:items-start justify-center w-full p-8 text-center lg:text-left mb-8 lg:mb-0"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-tight mb-4">
          Bookings
          <br /> are
          <span className="relative inline-block pl-3 text-tertiary">
            LIVE!
            <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-secondary to-tertiary rounded-md"></span>
          </span>
        </h1>
        <p className="text-base sm:text-lg lg:text-lg text-secondary mb-8 max-w-xl mx-auto lg:mx-0">
          Plot bookings are live starting from
          <strong className="text-tertiary"> $5000 </strong>
          only! Book now and preserve your slot in Americas #1 Housing Society!
        </p>
        <div>
          <Button value="Book Now" />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex mt-8"
      >
        <div className="relative h-auto">
          <Image
            src="/HeroSectionPic.png"
            alt="Modern House"
            width={3000}
            height={700}
            className="rounded-lg object-cover"
          />
        </div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute left-1/2 bottom-0 transform -translate-x-1/2 
             flex flex-col md:flex-row items-center justify-center 
             backdrop-blur-xs bg-white/70 border shadow-lg p-6 sm:p-8 
             w-[80vw] sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1100px] 
             max-w-[50vw] 
             rounded-xl 
             lg:rounded-r-none lg:border-r-0 lg:left-146"
        >
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-8">
            <span className="text-6xl sm:text-8xl font-extrabold text-tertiary leading-none">
              {count}+
            </span>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Bookings made already
            </p>
            <p className="text-lg sm:text-xl text-gray-600">
              Reserve your slot now!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
