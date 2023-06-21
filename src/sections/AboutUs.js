import React from 'react'
import coin from '../images/about.png'
import Button from '../components/Button.jsx'


const AboutUs = () => {
    return (
        <>
            <div className=' container mx-auto  lg:mx-40 pt-24'>
                <div className='grid grid-cols-1 lg:grid-cols-2 '>
                    <div className='p-4 mb-8 '>
                        <img src={coin} alt='silver coin' />
                    </div>
                    <div className='text-container px-14 mt-6'>
                        <h3 className='text-4xl mb-2 font-semibold'>About Us</h3>
                        <h5 className='text-xl text-[#16D5FF] mb-6'>The Most Trusted Cryptocurrency Platform</h5>
                        <p className='text-base text-[#999999]  mb-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet <br /><br />
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
                        </p>
                        <ul className='text-base text-[#999999]  '>
                            <li className='mb-2'>Tempor erat elitr rebum at clita</li>
                            <li className='mb-2'>Tempor erat elitr rebum at clita</li>
                            <li className='mb-6'>Tempor erat elitr rebum at clita</li>

                        </ul>
                        <Button>Read More</Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutUs
