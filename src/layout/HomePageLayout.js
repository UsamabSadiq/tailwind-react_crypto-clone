import React from 'react'
import HeroSection from '../sections/HeroSection'
import AboutUs from '../sections/AboutUs'
import Counter from '../sections/Counter'
import Feature from '../sections/Feature'


const HomePageLayout = () => {
  return (
    <>
      {/* <div className='max-w-[1400px]'>
      </div> */}

      <HeroSection />
      <AboutUs />
      <Counter />
      <Feature />
    </>
  )
}

export default HomePageLayout
