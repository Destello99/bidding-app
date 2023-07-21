import React from 'react'
import Typed from 'react-typed';

export default function HeroSection() {
  return (
    <div className=" flex h-48 max-h-full items-center text-center justify-center border-2 border-rose-500">
        <div className='border-2 border-blue-700'>
            <h1 className='text-[4rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-red-500'>
                DREAM DEAL
            <Typed
                    strings={[
                        '....',
                        '...',
                        '..',
                        '.'
                    ]}
                    typeSpeed={35}
                    backSpeed={20} 
                    loop       
            />
            </h1>
            <p>
                start your Dream Deal here
            </p>
        </div>
    </div>
  )
}
