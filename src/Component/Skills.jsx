import React from 'react'
import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { LiaNodeJs } from "react-icons/lia";
import { DiJavascript, DiMongodb } from "react-icons/di";


const skillList = [
        {
            title: "HTML",
            Icon: <ImHtmlFive2 />
        },
        {
            title: "CSS",
            Icon: <TbBrandCss3 />
        },
        {
            title: "Javascript",
            Icon: <DiJavascript/>
        },
        {
            title: "React",
            Icon: <FaReact />
        },
        {
            title: "Tailwindcss",
            Icon: <RiTailwindCssFill/>
        },
        {
            title: "Nextjs",
            Icon: <TbBrandNextjs />
        },
        {
            title: "Express",
            Icon: <SiExpress/>
        },
        {
            title: "Nodejs",
            Icon: <LiaNodeJs />
        },
        {
            title: "MongoDB",
            Icon: <DiMongodb />
        },
]
const Skills = () => {
  return (
    
    
    <div className='grid grid-cols-4 lg:grid-cols-5 gap-6 text-3xl lg:text-5xl text-textLight'> 
          {skillList.map((skill,ind)=>(
                <span key={ind} title={skill.title} className='h-10 w-10 hover:text-textGreen hover:-translate-y-2 transition-transform duration-200'>{skill.Icon}</span>
          ))}
    </div>
  )
}

export default Skills