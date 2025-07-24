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
    heading: "Minimalist Living Room Design",
    date: "April 2024",
  },
  {
    src: "/CarouselImg1.svg",
    heading: "Minimalist Living Room Design",
    date: "April 2024",
  },
  {
    src: "/CarouselImg1.svg",
    heading: "Minimalist Living Room Design",
    date: "April 2024",
  },
  {
    src: "/CarouselImg1.svg",
    heading: "Minimalist Living Room Design",
    date: "April 2024",
  },
  {
    src: "/CarouselImg1.svg",
    heading: "Minimalist Living Room Design",
    date: "April 2024",
  },
];

function Page() {
  return (
    <div className='flex flex-col w-full'>
        <Navbar/>
        <HeroSection/>
        <AnouncementSection/>
        <Quotation/>
        <div>
         <h1 className='font-extrabold my-8 text-4xl sm:text-4xl md:text-6xl text-primary p-0 lg:p-6 lg:pl-25 lg:pr-16 text-center lg:text-left'>
            Gallery
          </h1>
        <MyCarousel images={images} />;
        </div>
        <Footer/>
    </div>
  )
}

export default Page
