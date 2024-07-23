import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import {motion} from "framer-motion"

const Archive = () => {

    const [showMore,setShowMore] = useState(false);
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
          <div className='w-full flex flex-col items-center justify-center'>
            <h2 className='text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
            <p className='text-sm font-titleFont text-textGreen'>view the archive</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lg:px-10'>
                <ArchiveCard 
                  title={"ToDo App"}
                  description={"This is an advance Todo App in which we can create update delete and save the todo."}
                  techstack={["ReactJS","TailwindCSS"]}
                />
                <ArchiveCard 
                  title={"TeaStation"}
                  description={"This website is specially made for the Tea Lover like me 😊😊😊. In this website we can explore the different varieties of Teas available in world"}
                  techstack={["HTML","CSS","Javascript"]}
                />
                <ArchiveCard 
                  title={"Youtube Clone"}
                  description={"This is a youtube clone with some enhanced user experience apart from the standard youtube. So Sit back and relax and enjoy watching youtube."}
                  techstack={["ReactJS","TailwindCSS","Axios"]}
                />
               

                {
                  showMore && 
                    <>
                      <motion.div
                          initial={{opacity: 0}}
                          whileInView={{opacity:1}}
                          transition={{duration: 0.2}}
                        >       
                     <ArchiveCard 
                  title={"LoveDoggy"}
                  description={"This is a complete website for the Dog lover. In this we can explore the different varieties of Dogs available in a store and Dogs food. We can also see the review of the people"}
                  techstack={["HTML","CSS","Javascript"]}
                />
                      </motion.div>

                      <motion.div
                          initial={{opacity: 0}}
                          whileInView={{opacity:1}}
                          transition={{duration: 0.3}}
                        >
              <ArchiveCard 
                  title={"BgChanger"}
                  description={"Change your background color with just one click. This website uses react-state like usestate to effectively change the background color."}
                  techstack={["React","CSS","Axios"]}
                />              
                      </motion.div>

                      <motion.div
                          initial={{opacity: 0}}
                          whileInView={{opacity:1}}
                          transition={{duration: 0.4}}
                        >   
                         <ArchiveCard 
                  title={"LoveDoggy"}
                  description={"This is a complete website for the Dog lover. In this we can explore the different varieties of Dogs available in a store and Dogs food. We can also see the review of the people"}
                  techstack={["HTML","CSS","Javascript"]}
                />
                      </motion.div>

                      <motion.div
                          initial={{opacity: 0}}
                          whileInView={{opacity:1}}
                          transition={{duration: 0.5}}
                        >      
                      <ArchiveCard 
                  title={"DrumKit"}
                  description={"Using this website we can enjoy a virtual music world by just pressing our keyboard we can play the drums."}
                  techstack={["HTML","CSS","Javascript"]}
                />
                      </motion.div>

                      <motion.div
                          initial={{opacity: 0}}
                          whileInView={{opacity:1}}
                          transition={{duration: 0.6}}
                        >
                            
                         <ArchiveCard 
                  title={"BMI Calculator"}
                  description={"This is website calculate the BMI based on your given input."}
                  techstack={["HTML","CSS","Javascript"]}
                />
                      </motion.div>

                      <motion.div
                          initial={{opacity: 0}}
                          whileInView={{opacity:1}}
                          transition={{duration: 0.7}}
                        >   
                         <ArchiveCard 
                  title={"Digital Clock"}
                  description={"A digital clock which will show the Real-time."}
                  techstack={["HTML","CSS","Javascript"]}
                />
                      </motion.div>
              </>
                }
          </div>
          <div className='mt-12 flex justify-center items-center'>
                  <button onClick={()=>setShowMore((prev)=>!prev)} className='w-36 h-12 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 px-1'>
                      {!showMore?"See More":"See Less"}
                  </button>
          </div>

    </div>
  )
}

export default Archive