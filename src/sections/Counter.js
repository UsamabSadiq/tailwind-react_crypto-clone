import React from 'react'
import icon1 from '../images/icon-2.png'
import icon2 from '../images/icon-9.png'
import icon3 from '../images/icon-10.png'


const Counter = () => {

    const data = [
        {
            image: icon1,
            numericVal: 123456,
            text: 'Today Transactions'
        },
        {
            image: icon2,
            numericVal: 78910,
            text: 'Monthly Transactions'
        },
        {
            image: icon1,
            numericVal: 334455,
            text: 'Total Transactions'
        }
    ]
    return (
        <>
            <div className='main border-2 border-black lg:container lg:mx-auto mt-20'>
                <div className=' bg-[#F2F8FE] lg:mx-40 my-12 py-12 shadow-lg '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                        {
                            data.map((items, index) => {
                                return (
                                    <div className='main_1 mb-14 lg:mb-6 flex flex-col items-center'>
                                        <img src={items.image} alt={index} className='mb-6' />
                                        <h1 className='text-5xl mb-2'>{items.numericVal}</h1>
                                        <p className='text-xl text-[#16D5FF]'>{items.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
