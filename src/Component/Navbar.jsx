import React, { useRef, useState } from 'react'
import logo from "/logo.svg"
import {motion} from "framer-motion"
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {

    const ref = useRef();
    const [showMenu,setShowMenu] = useState(false);

  return (
    <div className='w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
        <div className='h-full max-w-container mx-auto flex items-center justify-between py-1'>
            <motion.div 
                initial={{y:-70,opacity: 0}}
                animate={{y:0,opacity: 1}}
                transition={{duration: 0.1}}
                className='pl-5'>
                    <img  
                        src={logo} 
                        alt="Logo"
                        className='h-[52px] w-[55px]'        
                    />
            </motion.div>
            <div className='hidden md:flex gap-4 items-center'>
                <ul className='flex justify-evenly gap-6'>
                                <a href="#about">
                                    <motion.li 
                                        initial={{y:-10,opacity: 0}}
                                        animate={{y:0,opacity: 1}}
                                        transition={{duration: 0.1,delay:0.2}}
                                        className='flex gap-2 items-center'>
                                        <span className='text-textGreen text-xs font-titleFont font-medium'>01.</span>
                                        <p className='font-titleFont text-xs font-medium text-textDark hover:text-textGreen'>About</p>
                                    </motion.li>
                                </a>
                                <a href="#projects">
                                    <motion.li 
                                        initial={{y:-10,opacity: 0}}
                                        animate={{y:0,opacity: 1}}
                                        transition={{duration: 0.1,delay:0.3}}
                                        className='flex gap-2 items-center'>
                                        <span className='text-textGreen text-xs font-titleFont font-medium'>02.</span>
                                        <p className='font-titleFont text-xs font-medium text-textDark hover:text-textGreen'>Projects</p>
                                    </motion.li>
                                </a>
                                <a href="#contact">
                                <motion.li 
                                    initial={{y:-10,opacity: 0}}
                                    animate={{y:0,opacity: 1}}
                                    transition={{duration: 0.1,delay:0.4}}
                                    className='flex gap-2 items-center'>
                                    <span className='text-textGreen text-xs font-titleFont font-medium'>03.</span>
                                    <p className='font-titleFont text-xs font-medium text-textDark hover:text-textGreen'>Contact</p>
                                </motion.li>
                                </a>
                </ul>
                <motion.button 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5}}
                    className='border-[1px] border-textGreen px-3 py-3 rounded-md hover:bg-hoverColor text-xs text-textGreen font-medium'>
                    <a href="/SDEResume.pdf">Resume</a>
                </motion.button>
            </div>

            {/* Small Icon section */}
            <div onClick={()=>setShowMenu(true)} className='w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                 <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                 <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
                 <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300'></span>
            </div>

            {showMenu && (
                <div 
                   ref={(node)=>(ref.current = node)}
                   className='absolute md:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
                  >
                    <motion.div
                        initial = {{x:20,opacity: 0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration: 0.1}}
                        className='w-[80%] h-full overflow-y-scroll bg-[#112240] flex flex-cp; items-center px-4 py-10 relative'
                        >
                            <MdOutlineClose onClick={()=>setShowMenu(false)}
                                className='text-3xl text-textGreen hover:text-red-500 absolute top-4 right-4'
                            />

                            <div className='flex flex-col items-center justify-center h-full w-full gap-7'>
                                  <ul className='flex flex-col gap-7'>
                                       <a href="/">
                                       <li className='flex flex-col items-center gap-1 text-xl text-textLight font-bold font-titleFont hover:text-textGreen transition-all duration-300'>
                                            <span className='text-textGreen '>01.</span>
                                            Home
                                       </li>
                                       </a>
                                       <a href="#about">
                                       <li className='flex flex-col items-center gap-1 text-xl text-textLight font-bold font-titleFont hover:text-textGreen transition-all duration-300'>
                                            <span className='text-textGreen'>02.</span>
                                            About
                                       </li>
                                       </a>
                                       <a href="#projects">
                                       <li className='flex flex-col items-center gap-1 text-xl text-textLight font-bold font-titleFont hover:text-textGreen transition-all duration-300'>
                                             <span className='text-textGreen'>03.</span>
                                             Projects
                                       </li>
                                       </a>
                                       <a href="#contact">
                                       <li className='flex flex-col items-center gap-1 text-xl text-textLight font-bold font-titleFont hover:text-textGreen transition-all duration-300'>
                                            <span className='text-textGreen'>04.</span>
                                            Contact
                                       </li>
                                       </a>
                                  </ul>
                            <motion.button 
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.5}}
                                className='border-[1px] border-textGreen px-6 py-3 rounded-md hover:bg-hoverColor text-xs text-textGreen font-medium'><a href="/SDEResume.pdf">Resume</a>
                            </motion.button>
                            </div>
                    </motion.div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar