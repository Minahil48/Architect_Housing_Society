import React from 'react';
import Link from 'next/link';
import { FbIcon, InstaIcon } from '@/assets/icons/common-icons'

function Footer() {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between mx-10 md:px-20 py-15 gap-10 border-t-1 border-tertiary'>
      <div className='flex flex-col gap-8 text-center lg:text-left'>
        <h1 className='text-xl md:text-3xl uppercase font-semibold'>Architect Housing Society</h1>
        <p className='text-xs md:text-lg'>Building Sustainable Communities for a Better Tomorrow <br /> © 2024 All Rights Reserved</p>
        <div className='flex gap-5 justify-center lg:justify-start mt-6'>
            <div className=' text-tertiary hover:text-gray-300'>{InstaIcon}</div> <div className=' text-gray-300 hover:text-gray-300'>{FbIcon}</div> 
        </div>
      </div>
      <div className='flex flex-col gap-2 text-center lg:text-left'>
        <h1 className='text-lg md:text-2xl mb-8 font-semibold text-tertiary'>Navigate</h1>
        <Link href="/">
          <p className='text-sm md:text-lg hover:underline'>Home</p>
        </Link>
        <Link href="/announcement">
          <p className='text-sm md:text-lg hover:underline'>Announcement</p>
        </Link>
        <Link href="/gallery">
          <p className='text-sm md:text-lg hover:underline'>Gallery</p>
        </Link>
      </div>

      <div className='flex flex-col gap-8 text-center lg:text-left'>
        <h1 className='text-lg md:text-2xl font-semibold text-tertiary'>Address</h1>
        <p className='text-xs md:text-lg'>123 Greenway Blvd, Eco City, State, 12345</p>
      </div>
    </div>
  );
}

export default Footer;