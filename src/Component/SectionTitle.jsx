import React from 'react'

const SectionTitle = ({titno,titlename}) => {
  return (
    <h2 className='font-titleFont text-2xl font-semibold flex items-center'>
          <span className='text-textGreen mr-2 text-base lg:text-lg'>{titno}</span>{" "}
          {titlename}
          <span className='hidden md:inline-flex md:w-60 lg:w-72 h-[0.5px] bg-gray-700 ml-6'></span>
    </h2>
  )
}

export default SectionTitle