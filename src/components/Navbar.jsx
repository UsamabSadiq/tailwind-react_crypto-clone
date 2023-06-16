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
                <div className="container grid grid-cols-1 mx-auto px-3">
                    <div className='leftSide flex items-center border-2 border-green-500'>

                        <img src={navIcon} alt="logo" />

                        <span className='text-3xl font-bold text-blue-300 '>
                            CryptoCoin
                        </span>
                    </div>

                    <div onClick={() => setOpen(!open)} className='absolute top-5 right-4 border-2 border-black text-lg rounded p-1  lg:hidden'>
                        {open ? <IoClose /> : <FaBars />}
                    </div>
                    <ul className={`${open ? 'rightSide flex flex-col justify-between items-end pr-3  border-2 border-blue-800' : 'hidden'} `}>
                        {
                            listItems.map((link) => (

                                <li key={link.link} className='pb-4' ><a href={link.link}>{link.name}</a></li>
                            ))
                        }

                        <FaFacebookF />
                        <FaTwitter />
                        < FaLinkedinIn />

                    </ul>


                </div>
            </div>

        </>
    )
}

export default Navbar
