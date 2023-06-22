import React from 'react'
import HeroSection from '../sections/HeroSection'
import AboutUs from '../sections/AboutUs'
import Counter from '../sections/Counter'
import Feature from '../sections/Feature'
import Services from '../sections/Services'


const HomePageLayout = () => {
  return (
    <>
      {/* <div className='max-w-[1400px]'>
      </div> */}

      <HeroSection />
      <AboutUs />
      <Counter />
      <Feature />
      <Services />
    </>
  )
}

export default HomePageLayout
