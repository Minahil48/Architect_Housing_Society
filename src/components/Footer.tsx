import React from 'react';
import Link from 'next/link';
import { arrowIcon, FbIcon, InstaIcon } from '@/assets/icons/common-icons'

function Footer() {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between items-center mx-10 md:px-20 py-10 gap-8 border-t-1 border-tertiary'>
      <div className='flex flex-col gap-4 text-center md:text-left'>
        <h1 className='text-xl md:text-2xl uppercase font-semibold'>Architect Housing Society</h1>
        <p className='text-xs md:text-sm'>Building Sustainable Communities for a Better Tomorrow. © 2024 All Rights Reserved</p>
        <div className='flex gap-5 justify-center lg:justify-start'>
            <div className=' text-tertiary hover:text-gray-300'>{FbIcon}</div> <div className=' text-tertiary hover:text-gray-300'>{InstaIcon}</div>
        </div>
      </div>
      <div className='flex flex-col gap-3 text-center md:text-left'>
        <h1 className='text-lg md:text-xl font-semibold text-tertiary'>Navigate</h1>
        <Link href="/">
          <p className='text-sm md:text-base hover:underline'>Home</p>
        </Link>
        <Link href="/announcement">
          <p className='text-sm md:text-base hover:underline'>Announcement</p>
        </Link>
        <Link href="/gallery">
          <p className='text-sm md:text-base hover:underline'>Gallery</p>
        </Link>
      </div>

      <div className='flex flex-col gap-4 text-center md:text-left'>
        <h1 className='text-lg md:text-xl font-semibold text-tertiary'>Address</h1>
        <p className='text-xs md:text-sm'>123 Greenway Blvd, Eco City, State, 12345</p>
      </div>
    </div>
  );
}

export default Footer;