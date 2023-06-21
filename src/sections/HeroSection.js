import React from 'react'
import Navbar from '../components/Navbar'
import hero1 from '../images/hero-1.png'
import Button from '../components/Button'

const HeroSection = () => {
    return (
        <div>
            <Navbar />
            <div className='main bg-[#bfe1e8]'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 px-6 lg:grid-cols-2 '>
                        <div className='text flex  items-start justify-center flex-col mt-16'>
                            <div className='pr-3 my-5'>
                                <h3 className='text-3xl font-semibold mb-3 md:text-5xl md:mb-5'>
                                    Make Better Life With Trusted CryptoCoin
                                </h3>
                                <p className='text-lg mb-3'>
                                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam br et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet

                                </p>
                                <Button> Explore More</Button>
                            </div>
                        </div>

                        <div className='mt-5 md:mt-0 flex justify-center '>
                            <img src={hero1} alt='hero1-img' className='w-10/12 h-auto ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection
