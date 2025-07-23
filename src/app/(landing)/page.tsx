import Footer from '@/components/Footer'
import AnouncementSection from '@/components/LandingPage/AnouncementSection'
import HeroSection from '@/components/LandingPage/HeroSection'
import Quotation from '@/components/LandingPage/Quotation'
import MyCarousel from '@/components/LandingPage/ScrollableGallery'
import Navbar from '@/components/Navbar'
import React from 'react'

const images = [
  {
    src: "/CarouselImg1.svg",
    heading: "Architecture Marvel",
    date: "July 23, 2025",
  },
  {
    src: "/CarouselImg1.svg",
    heading: "Modern Design",
    date: "July 20, 2025",
  },
  {
    src: "/CarouselImg1.svg",
    heading: "Urban Living",
    date: "July 18, 2025",
  },
  {
    src: "/CarouselImg1.svg",
    heading: "Urban Living",
    date: "July 18, 2025",
  },
  {
    src: "/CarouselImg1.svg",
    heading: "Urban Living",
    date: "July 18, 2025",
  },
];

function Page() {
  return (
    <div className='flex flex-col gap-5 w-full'>
        <Navbar/>
        <HeroSection/>
        <AnouncementSection/>
        <Quotation/>
        <div>
         <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary p-0 lg:p-6 lg:pl-14 lg:pr-16 text-center lg:text-left'>
            Gallery
          </h1>
        <MyCarousel images={images} />;
        </div>
        <Footer/>
    </div>
  )
}

export default Page
