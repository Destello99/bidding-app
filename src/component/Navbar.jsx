import React from 'react'

export const Navbar = () => {
    return (
        <div className='flex justify-between  dark:bg-neutral-600  '>

            <h1 className='p-4 text-2xl text-stone-50'>
                Dream Deal
            </h1>

            <ul className='flex p-4 space-x-4 '>
                <a href="" className='hover:text-xl text-white'>
                    <li>Login</li>
                </a>
                <a href="" className='hover:text-lg text-white'>

                    <li>SignUp</li>
                </a>
                <a href="" className='hover:text-lg text-white'>

                    <li>About Us</li>
                </a>
                <a href="" className='hover:text-lg text-white'>

                    <li>Contact Us</li>
                </a>
            </ul>

        </div>
    )
}
