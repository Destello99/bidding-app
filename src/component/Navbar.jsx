import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div className='flex justify-between  dark:bg-neutral-600  '>
            <Link to="/">
                <h1 className='p-4 text-2xl text-stone-50'>
                    Dream Deal
                </h1>
            </Link>
             <ul className='flex p-4 space-x-4 '>
                 <Link to="/login" className='hover:text-[17px] ease-in hover:transition duration-200 text-white active:text-gray-300' >Login</Link>
                 <Link to="/signup" className='hover:text-[17px] hover:transition duration-200 ease-in text-white active:text-gray-300'>Sign up</Link>
                 <Link to="/about" className='hover:text-[17px] hover:transition duration-200 ease-in text-white active:text-gray-300'>About Us</Link>
                 <Link to="/Contact" className='hover:text-[17px] hover:transition duration-200 ease-in text-white active:text-gray-300'>Contact Us</Link>
             </ul>
     </div>

    )
}
