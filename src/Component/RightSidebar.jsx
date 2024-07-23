import React from 'react'

const RightSidebar = () => {
  return (
    <div className='flex flex-col items-center justify-end gap-32'>
            <a href="mailto:kamleshwarpradhan1208@gmail.com">
                 <p className='text-sm rotate-90 hover:text-textGreen hover:-translate-y-2 transition-all duration-200'>kamleshwarpradhan1208@gmail.com</p>
            </a>
            <span className='w-[2px] h-32 bg-textDark'></span>
    </div>
  )
}

export default RightSidebar