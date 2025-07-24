'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { arrow } from '@/assets/icons/common-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Announcement', href: '/anouncements' },
    { label: 'Gallery', href: '/gallery' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 dark:border-gray-600">
      <div className="flex items-center justify-between mx-auto p-4 lg:pl-12 pr-12">
        <div className="flex flex-col">
          <Link href="/" className="flex items-center gap-3">
            <span className="self-center uppercase text-xs sm:text-base md:text-sm lg:text-xl xl:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Architect Housing Society
            </span>
          </Link>
        </div>

        <div className="flex md:order-2 gap-3 md:space-x-0">
          <Link href="#contact">
            <Button value="Contact Us" icon={arrow} />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } items-center uppercase justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col lg:text-2xl text-xs p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative inline-block py-2 px-5 text-tertiary md:p-0 transition-all duration-300
                    ${
                      pathname === link.href
                        ? 'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-8 after:bg-tertiary'
                        : 'hover:after:absolute hover:after:bottom-0 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:w-8 hover:after:h-0.5 hover:after:bg-tertiary after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-center'
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="border-t border-tertiary sm:w-[250px] w-[300px] lg:w-[450px]" />
    </nav>
  );
};

export default Navbar;