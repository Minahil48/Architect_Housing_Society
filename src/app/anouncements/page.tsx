import React from 'react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import AnnouncementCard from '@/components/AnouncementCard'; // Corrected typo if any, should be AnnouncementCard
import Footer from '@/components/Footer';

function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center lg:items-start gap-8 mt-20 mx-20 sm:mt-24 md:mt-32 px-5 py-8 border-b-1 border-tertiary">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-primary text-center lg:text-left">
          Announcements
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 w-full">
          <img
            src="/img1.svg"
            alt="For Everyone Image"
            className="w-full lg:w-1/2 xl:w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="max-w-xl flex flex-col gap-4 text-center lg:text-left">
            <h2 className="text-xl text-tertiary font-bold">Grand opening ceremony</h2>
            <p className="font-bold">25 July 2025</p>
            <p className="my-4 sm:my-6">
              Exciting News: The Architect Housing Society is proud to announce the grand opening of our new
              community park on July 15th, 2024. Join us for a day of fun, food, and festivities as we celebrate
              this milestone in creating a greener, more vibrant community!
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button value="Book now" />
            </div>
          </div>
        </div>
      </div>

      {/* --- Responsive Vertical Cards Section --- */}
      <div className="
        grid                 /* Establishes a CSS Grid */
        grid-cols-1          /* Default: 1 column on small screens */
        sm:grid-cols-2       /* On small screens (sm) and up: 2 columns */
        lg:grid-cols-3       /* On large screens (lg) and up: 3 columns */
        gap-6                /* Gap between grid items */
        my-10                /* Vertical margin */
        px-4 sm:px-6 lg:px-8 /* Horizontal padding for better spacing on different screens */
        justify-items-center /* Center items within their grid cells */
      ">
        <AnnouncementCard
          imageUrl="/img2.svg"
          imageAlt="Investor"
          tag="For Investors"
          title="Investment Initiative Launch"
          description="Read more about GreenFuture Ventures."
          date="25th June 2024"
          seeMoreLink="#"
          orientation='vertical'
        />
        <AnnouncementCard
          imageUrl="/img2.svg"
          imageAlt="Investor"
          tag="For Investors"
          title="Investment Initiative Launch"
          description="Read more about GreenFuture Ventures."
          date="25th June 2024"
          seeMoreLink="#"
          orientation='vertical'
        />
        <AnnouncementCard
          imageUrl="/img2.svg"
          imageAlt="Investor"
          tag="For Investors"
          title="Investment Initiative Launch"
          description="Read more about GreenFuture Ventures."
          date="25th June 2024"
          seeMoreLink="#"
          orientation='vertical'
        />
      </div>

      <Footer/>
    </div>
  );
}

export default Page;