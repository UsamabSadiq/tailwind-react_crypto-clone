import React, { useState } from 'react'
import navIcon from '../images/icon-1.png'
import { IoClose } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBars } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const listItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Service', link: '/service' },
        { name: 'Contact', link: '/contact' },
        { name: 'Roadmap', link: '/roadmap' }

    ]

    // const navOpenHandler = () ={

    // }
    return (
        <>
            <div className='shadow-lg'>
                <div className="container grid grid-cols-1 lg:grid-cols-2 mx-auto px-3">
                    <div className='leftSide flex items-center'>

                        <img src={navIcon} alt="logo" />

                        <span className='text-3xl font-bold text-blue-300 '>
                            CryptoCoin
                        </span>
                    </div>

                    <div onClick={() => setOpen(!open)} className={`absolute top-5 right-9 border-2 border-black text-lg rounded p-1  lg:hidden`}>
                        {open ? <IoClose /> : <FaBars />}
                    </div>


                    <ul className={` 'rightSide lg:flex lg:justify-around lg:items-center pr-3' ${open ? 'rightSide flex flex-col justify-between items-end pr-3' : 'hidden'} `}>
                        {
                            listItems.map((link) => (

                                <li key={link.link} className={open ? 'pb-3' : ''} ><a href={link.link}>{link.name}</a></li>
                            ))
                        }
                        <li className='flex gap-3'>
                            <FaFacebookF className='text-xl' />
                            <FaTwitter className='text-xl' />
                            < FaLinkedinIn className='text-xl' />
                        </li>
                    </ul>

                    {/* 'rightSide lg:flex lg:justify-around lg:items-center pr-3' */}
                </div>
            </div>

        </>
    )
}

export default Navbar
