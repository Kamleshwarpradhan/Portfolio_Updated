import React from 'react'
import { FaRegFolder } from 'react-icons/fa'
import { LuExternalLink } from "react-icons/lu";

const ArchiveCard = ({title,description,techstack}) => {
  
  return (
    <a href="#">
          <div className='w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
              <div className='flex justify-between items-center'>
                  <FaRegFolder className='text-2xl hover:text-textGreen' />
                  <LuExternalLink className='text-2xl hover:text-textGreen' />
              </div>

              <div>
                  <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>{title}</h2>
                  <p className='text-sm mt-3'>{description}</p>
              </div>

              <ul className='text-xs md:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap'>
                   {techstack.map((item,ind)=>(
                       <li key={ind}>{item}</li>
                   ))}
              </ul>
          </div>
    </a>
  )
}

export default ArchiveCard