import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import icon2 from '../images/icon-2.png'
import icon3 from '../images/icon-3.png'
import icon5 from '../images/icon-5.png'
import icon7 from '../images/icon-7.png'
import icon8 from '../images/icon-8.png'
import icon9 from '../images/icon-9.png'


const Services = () => {

    const cardData = [
        {
            image: icon2,
            heading: "Currency Wallet"
        },
        {
            image: icon3,
            heading: "Currency Transaction"
        }, {
            image: icon5,
            heading: "Bitcoin Investment"
        }, {
            image: icon7,
            heading: "Currency Exchange"
        }, {
            image: icon8,
            heading: "Bitcoin Escrow"
        }, {
            image: icon9,
            heading: "Token Sale"
        }

    ]
    return (
        <>
            <div className='main container mx-auto mt-20 mb-10'>
                <div className=' bg-[#F2F8FE] lg:mx-40 my-12 py-20 shadow-lg '>
                    <h1 className='text-center font-semibold text-4xl mb-2'>Services</h1>
                    <p className='text-[#16D5FF] mb-12 text-center text-xl'> Buy, Sell And Exchange Cryptocurrency</p>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:mx-12  md:mx-4'>
                        {cardData.map((item, index) => {
                            return (
                                <div className='card bg-white shadow-md rounded-tr-[5rem] hover:rounded-none duration-500  p-10'>
                                    <img src={item.image} alt='' className='mb-6' />
                                    <h4 className='text-xl mb-4 font-semibold'>{item.heading}</h4>
                                    <p className='text-base mb-4 text-[#999999]'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                                    <a href='/' className='text-[#16D5FF] text-base'>Read More <BsArrowRight className='inline text-lg' /></a>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
