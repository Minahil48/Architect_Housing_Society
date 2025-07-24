'use client';
import React from 'react';
import { motion } from 'framer-motion';
import AnnouncementCard from '../AnouncementCard';
import { arrowIcon } from '@/assets/icons/common-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function AnouncementSection() {
  return (
    <div className='flex flex-col mt-10 md:px-10 lg:pl-20 gap-8 lg:gap-10'>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 70,
          damping: 16,
          delay: 0.1,
        }}
        viewport={{ once: true }}
        className='flex justify-center lg:justify-start'
      >
        <h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-primary text-center lg:text-left'>
          Announcements
        </h1>
      </motion.div>

      <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-8 lg:gap-10'>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 70,
            damping: 18,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className='w-full max-w-md md:max-w-lg lg:max-w-[580px]'
        >
          <div className='relative w-full'>
            <Image
              src="/img1.svg"
              alt="For Everyone Image"
              width={580}
              height={400}
              className="object-cover rounded-lg w-full"
            />
            <p className='text-xs text-center lg:text-left sm:text-sm font-bold text-primary pt-4 pb-2'>
              25th July 2025
            </p>
            <div className='flex lg:justify-between lg:items-start justify-center items-center'>
              <div className='flex flex-col pr-4'>
                <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-tertiary mb-1'>
                  Grand Opening Ceremony
                </h2>
                <p className='text-sm sm:text-base text-gray-700'>
                  Bookings for the Opening Ceremony available now
                </p>
              </div>
              <div className='text-tertiary hover:text-primary cursor-pointer flex-shrink-0'>
                <Link href={"/anouncements"}>{arrowIcon}</Link>
              </div>
            </div>
          </div>
        </motion.div>

        <hr className="hidden lg:block h-auto w-[0.25px] bg-tertiary border-none self-stretch" />
        <hr className="block lg:hidden w-full h-[1px] bg-tertiary border-none my-4" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 70,
            damping: 18,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className='flex flex-col items-center pb-10 w-full max-w-md md:max-w-lg lg:max-w-[635px] gap-5'
        >
          <div className="w-full">
            <AnnouncementCard
              imageUrl="/img2.svg"
              imageAlt="Investor"
              tag="For Investors"
              title="Investment Initiative Launch"
              description="Read more about GreenFuture Ventures."
              date="25th June 2024"
            />
          </div>
          <div className="w-full">
            <AnnouncementCard
              imageUrl="/img3.svg"
              imageAlt="Booking"
              tag="For Everyone"
              title="First Phase Booking Initiated"
              description="Read more about GreenFuture Ventures."
              date="25th June 2024"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
