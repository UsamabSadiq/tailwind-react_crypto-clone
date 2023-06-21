import React from 'react'

const Button = (props) => {
    return (
        <>
            <button className='border-2 border-[#16D5FF]  bg-[#16D5FF] text-xl p-4 cursor-pointer rounded text-white hover:bg-[#34bbda]'>
                {props.children}
            </button>
        </>
    )
}

export default Button
