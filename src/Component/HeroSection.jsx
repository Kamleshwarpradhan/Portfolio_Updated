import React from 'react'
import{motion} from "framer-motion"

const HeroSection = () => {
  return (
    <div className='w-full flex flex-col gap-8 pt-22 md:pt-20 md:ml-10 p-4 md:p-0 mr-4'>
           <motion.h3 
                 initial={{y:10,opacity:0}}
                 animate={{y:0,opacity:1}}
                 transition={{duration:0.5,delay: 0.6}}
                className='text-textGreen font-semibold font-bodyFont text-[16px] leading-4 tracking-wider'>Hi, my name is</motion.h3>    
           <motion.div
                initial={{y:10,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:0.5,delay: 0.7}}
            >
                <h1 className='text-[50px] md:text-[55px] xl::text-[70px] text-textLight font-bold'>Kamlehswar Pradhan.</h1>
                <h2 className='text-[30px] md:text-[55px] xl:text-[70px] text-textDark font-bold'>I love to build things for the web.</h2>
           </motion.div>
           <motion.p 
             initial={{y:10,opacity:0}}
             animate={{y:0,opacity:1}}
             transition={{duration:0.5,delay: 0.8}}
            className='max-w-containerxs w-[360px] md:max-w-container md:w-[600px] text-textLight'>I'm a software devoloper enthusiast who loved to build things for web and I also have a keen intreset in solving problems related to Data structure and algorithm.{" "}
           <a href="#about">
            <span className='text-textGreen inline-flex relative cursor-pointer overflow-x-hidden h-7 group'>
                Learn More
                <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'>
                </span>
            </span>
            </a>
           </motion.p>
           <a href="#projects">
            <motion.button 
              initial={{y:10,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:0.5,delay: 0.9}}
              className='w-44 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 px-1'>Check out my Project!
            </motion.button>
           </a>
    </div>
  )
}

export default HeroSection