'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import AnnouncementCard from '@/components/AnouncementCard';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center text-center lg:text-left lg:items-start gap-8 mt-20 mx-20 sm:mt-24 md:mt-32 px-5 py-8 border-b-1 border-tertiary"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-semibold lg:text-7xl sm:text-4xl text-4xl text-primary text-center lg:text-left"
        >
          Announcements
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative rounded-lg overflow-hidden"
          >
            <Image
              src="/img1.svg"
              alt="For Everyone Image"
              width={640}
              height={400}
              className="object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-xl flex flex-col gap-4 lg:text-left"
          >
            <h2 className="md:text-3xl sm:text-sm text-tertiary font-bold">Grand opening ceremony</h2>
            <p className="font-bold md:text-lg sm:text-sm">25 July 2024</p>
            <p className="md:text-xl sm:text-xs my-4 sm:my-6">
              Exciting News: The Architect Housing Society is proud to announce the grand opening of our new
              community park on July 15th, 2024. Join us for a day of fun, food, and festivities as we celebrate
              this milestone in creating a greener, more vibrant community!
            </p>
              <Button value="Book now" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex flex-col items-center lg:flex-row gap-6 my-10 px-4 sm:px-6 lg:px-8 justify-items-center"
      >
        {[1, 2, 3].map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <AnnouncementCard
              imageUrl="/img2.svg"
              imageAlt="Investor"
              tag="For Investors"
              title="Investment Initiative Launch"
              description="Read more about GreenFuture Ventures."
              date="25th June 2024"
              orientation="vertical"
            />
          </motion.div>
        ))}
      </motion.div>

      <Footer />
    </div>
  );
}

export default Page;
