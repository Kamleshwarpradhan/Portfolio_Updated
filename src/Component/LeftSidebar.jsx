import React from 'react'
import { FiGithub } from "react-icons/fi";
import { SlSocialInstagram, SlSocialLinkedin,SlSocialFacebook  } from "react-icons/sl";
import { TbBrandTwitter } from "react-icons/tb";

const LeftSidebar = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
           <div className='flex flex-col gap-4'>
               <a href="https://github.com/Kamleshwarpradhan" target='_blank'>
                    <span 
                        className='h-10 w-10 text-xl bg-hoverColor rounded-full cursor-pointer hover:text-textGreen hover:-translate-y-2 transition-all duration-300 inline-flex justify-center items-center'>
                            <FiGithub />
                    </span>
               </a>
               <a href="https://www.linkedin.com/in/kamleshwar-pradhan/" target='_blank'>
                    <span className='h-10 w-10 text-xl bg-hoverColor rounded-full cursor-pointer hover:text-textGreen hover:-translate-y-2 transition-all duration-300 inline-flex justify-center items-center'><SlSocialLinkedin /></span>
               </a>
               <a href="">
                    <span className='h-10 w-10 text-xl bg-hoverColor rounded-full cursor-pointer hover:text-textGreen hover:-translate-y-2 transition-all duration-300 inline-flex justify-center items-center'><SlSocialInstagram /></span>
               </a>
               <a href="">
                    <span className='h-10 w-10 text-xl bg-hoverColor rounded-full cursor-pointer hover:text-textGreen hover:-translate-y-2 transition-all duration-300 inline-flex justify-center items-center'><SlSocialFacebook /></span>
               </a>
               <a href="">
                    <span className='h-10 w-10 text-xl bg-hoverColor rounded-full cursor-pointer hover:text-textGreen hover:-translate-y-2 transition-all duration-300 inline-flex justify-center items-center'><TbBrandTwitter /></span>
               </a>
           </div>
           <span className='w-[2px] h-32 bg-textDark'></span>
    </div>
  )
}

export default LeftSidebar