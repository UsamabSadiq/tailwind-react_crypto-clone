import React from 'react'
import icon3 from '../images/icon-3.png'
import icon4 from '../images/icon-4.png'
import icon5 from '../images/icon-5.png'
import icon6 from '../images/icon-6.png'
import icon7 from '../images/icon-7.png'
import icon8 from '../images/icon-8.png'


const Feature = () => {

    const data = [
        {
            image: icon3,
            text: 'Easy To Start'
        },
        {
            image: icon4,
            text: 'Safe & Secure'
        },
        {
            image: icon5,
            text: 'Afordable Plans'
        },
        {
            image: icon6,
            text: 'Secure Storage'
        },
        {
            image: icon7,
            text: 'Protected by Insurance'
        },
        {
            image: icon8,
            text: '24/7 Support'
        },
    ]

    return (
        <>
            <div className='container mx-auto px-10 py-5 '>
                <h2 className='text-center text-3xl mb-2 font-semibold'>Why Us!</h2>
                <p className='text-[#16D5FF] text-xl text-center mb-10'>The Best In The crypto Industry</p>

                <div className='container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12  py-3'>

                    {data.map((item, index) => {
                        return (

                            <div key={index} className='flex px-7 items-center'>
                                <img src={item.image} alt='icon-3' className='h-16 w-16' />
                                <div className='pl-6'>
                                    <h4 className='text-xl font-semibold mb-4'>{item.text}</h4>
                                    <p className='text-base text-[#999999]'> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Feature
