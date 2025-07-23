import React from 'react';
import Image from 'next/image';

const Quotation: React.FC = () => {
  return (
    <div className="relative h-[320px] w-full mx-auto">
      {/* Background Image */}
      <Image
        src="/quotationbg.svg"
        alt="Quotation Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center p-4 pl-25">
        <div className="max-w-5xl text-left text-white">
          <h1 className="text-xl font-bold sm:text-3xl md:text-4xl lg:text-3xl">
            Architect Housing Society has set a new benchmark in sustainable urban development,
            earning accolades for its innovative design, community-focused amenities, and environmental stewardship.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
