import React from 'react';
import Image from 'next/image'; // ✅ Import Image
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import AnnouncementCard from '@/components/AnouncementCard';
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
          <div className="w-full lg:w-1/2 xl:w-1/3 h-auto relative rounded-lg overflow-hidden">
            <Image
              src="/img1.svg"
              alt="For Everyone Image"
              layout="responsive"
              width={600}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
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

      <div className="flex flex-col lg:flex-row gap-6 my-10 px-4 sm:px-6 lg:px-8 justify-items-center"> 
        <AnnouncementCard
          imageUrl="/img2.svg"
          imageAlt="Investor"
          tag="For Investors"
          title="Investment Initiative Launch"
          description="Read more about GreenFuture Ventures."
          date="25th June 2024"
          orientation='vertical'
        />
        <AnnouncementCard
          imageUrl="/img2.svg"
          imageAlt="Investor"
          tag="For Investors"
          title="Investment Initiative Launch"
          description="Read more about GreenFuture Ventures."
          date="25th June 2024"
          orientation='vertical'
        />
        <AnnouncementCard
          imageUrl="/img2.svg"
          imageAlt="Investor"
          tag="For Investors"
          title="Investment Initiative Launch"
          description="Read more about GreenFuture Ventures."
          date="25th June 2024"
          orientation='vertical'
        />
      </div>

      <Footer />
    </div>
  );
}

export default Page;
