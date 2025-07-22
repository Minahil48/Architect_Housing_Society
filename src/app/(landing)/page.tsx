import AnouncementSection from '@/components/LandingPage/AnouncementSection'
import Header from '@/components/LandingPage/Header'
import HeroSection from '@/components/LandingPage/HeroSection'
import Quotation from '@/components/LandingPage/Quotation'
import React from 'react'

function Page() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <HeroSection/>
      </div>
      <div>
        <AnouncementSection/>
      </div>
      <div className='pt-6'>
        <Quotation/>
      </div>
    </>
  )
}

export default Page
