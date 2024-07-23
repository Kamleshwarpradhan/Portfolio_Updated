import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-containerxs mx-auto flex flex-col justify-center items-center py-4 text-textLight font-titleFont'>
          <p>
            Design & built with love by Kamleshwar Pradhan
            with an inspiration from {" "}
            <a href="https://v4.brittanychiang.com/" target='_blank'>
            <span className='text-textGreen inline-flex relative cursor-pointer overflow-x-hidden h-7 group'>
                Brittany Chiang
                <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'>
                </span>
            </span>
            </a> website
          </p>
          <p> Thanks for visiting ❤️</p>
    </div>
  )
}

export default Footer