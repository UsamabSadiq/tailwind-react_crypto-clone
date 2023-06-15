import React from 'react'
import navIcon from '../images/icon-1.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <div className=' py-3'>
                <div className='grid grid-cols-2'>
                    <div className="leftSide flex items-center">
                        <div>
                            <img src={navIcon} alt="Nav Logo" className='w-11' />
                        </div>

                        <span className='text-4xl font-bold ml-2 text-blue-300'>CryptoCoin</span>

                    </div>
                    <div className="rightSide  ">
                        <ul className='flex items-center justify-evenly h-full'>
                            <li><a>Home</a></li>
                            <li><a>About </a></li>
                            <li><a>Service</a></li>
                            <li><a>RoadMap</a></li>
                            <li><a>Contact</a></li>

                            <div className="icon  p-[0.45rem] bg-blue-200 text-blue-400 border rounded-full hover:text-white hover:bg-blue-400">
                                <FaFacebookF className='text-xl' />
                            </div>
                            <div className="icon  p-[0.45rem] bg-blue-200 text-blue-400 border rounded-full hover:text-white hover:bg-blue-400">
                                <FaTwitter className='text-xl' />
                            </div>
                            <div className="icon  p-[0.45rem] bg-blue-200 text-blue-400 border rounded-full hover:text-white hover:bg-blue-400">
                                <FaLinkedinIn className='text-xl' />
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
