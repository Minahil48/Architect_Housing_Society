'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Quotation: React.FC = () => {
  return (
    <div className="relative h-[440px] w-full mx-auto overflow-hidden">
      <Image
        src="/quotationbg.svg"
        alt="Quotation Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-secondary opacity-50 z-10"></div>

      <div className="relative z-20 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1.2,
            ease: 'easeOut',
          }}
          className="max-w-6xl lg:text-left text-center text-white p-14"
        >
          <h1 className="text-xl font-semibold sm:text-3xl md:text-4xl lg:text-4xl leading-15">
            Architect Housing Society has set a new benchmark in sustainable urban development,
            earning accolades for its innovative design, community-focused amenities, and environmental stewardship.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Quotation;
