import React from 'react';

const Quotation: React.FC = () => {
  return (
    <div
      className="relative h-[320px] w-full mx-auto bg-cover bg-center"
      style={{ backgroundImage: `url('/quotationbg.svg')` }}
    >
      <div className="absolute inset-0 bg-secondary opacity-50"></div>

      <div className="relative z-10 flex h-full items-center p-4 pl-25">
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
