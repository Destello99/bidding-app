import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"

export default function HeroSection() {
    return (
        <div className=" flex h-48 max-h-full items-center text-center justify-center">
            <div className=''>
                <motion.h1 className='text-[4rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-red-500'
                    initial={{y:-200}}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.9 }}
                >
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
                </motion.h1>
                <p >
                    start your Dream Deal here
                </p>
            </div>
        </div>
    )
}
