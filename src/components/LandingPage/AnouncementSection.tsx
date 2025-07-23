import React from 'react';
import AnnouncementCard from '../AnouncementCard';
import { arrowIcon } from '@/assets/icons/common-icons'
import Link from 'next/link'

export default function AnouncementSection() {

  return (
    <div className='flex flex-col lg:flex-row gap-7.5 mt-10 p-4 lg:p-0'>
      <div className='flex flex-col w-full lg:w-[700px]'>
        <div className='flex justify-center lg:justify-start'>
          <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary p-0 lg:p-6 lg:pl-14 lg:pr-16 text-center lg:text-left'>
            Announcements
          </h1>
        </div>

        <div className='relative w-full p-6 lg:pl-16'>
          <img src="/img1.svg" alt="For Everyone Image" className='w-full h-auto object-cover rounded-lg' />
          <p className='text-xs sm:text-sm font-bold text-primary pt-2 pb-2'>25th July 2025</p>
          <h1 className='text-lg sm:text-xl font-bold text-tertiary'>Grand Opening Ceremony</h1>
          <div className='flex pb-2 gap-8 items-center'>
            <p className='text-sm sm:text-base'>Bookings for the Opening Ceremony available now</p>
            <div className='text-tertiary hover:text-primary cursor-pointer'><Link href={"/anouncements"}>{arrowIcon}</Link></div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block h-auto w-px bg-gray-300 flex-shrink-0" />
      
      <div className='flex flex-col items-end lg:items-end md:items-center gap-5 justify-center w-full lg:w-[600px]'>
        <div className="w-full max-w-lg">
          <AnnouncementCard
            imageUrl="/img2.svg"
            imageAlt="Investor"
            tag="For Investors"
            title="Investment Initiative Launch"
            description="Read more about GreenFuture Ventures."
            date="25th June 2024"
            seeMoreLink="#"
          />
        </div>
        <div className="w-full max-w-lg">
          <AnnouncementCard
            imageUrl="/img3.svg"
            imageAlt="Booking"
            tag="For Everyone"
            title="First Phase Booking Initiated"
            description="Read more about GreenFuture Ventures."
            date="25th June 2024"
            seeMoreLink="#"
          />
        </div>
      </div>
    </div>
  );
}