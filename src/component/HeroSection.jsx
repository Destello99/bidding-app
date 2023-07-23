import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function HeroSection() {
    return (
        <div className=" flex h-48 max-h-full items-center text-center justify-center">
            <div className=''>
                <h1 className='text-[4rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-red-500'>
                    DREAM DEAL
                    <span>
                        <Typewriter
                            words={['..auction', '..bid','..WIN!']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            
                        />
                    </span>
                </h1>
                <p>
                    start your Dream Deal here
                </p>
            </div>
        </div>
    )
}
