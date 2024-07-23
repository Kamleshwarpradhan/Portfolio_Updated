import React from 'react'
import SectionTitle from './SectionTitle'
import Snapgram from "/Snapgram.png"
import eraserclone from "/project2.png"
import codeconnects from "/CodeConnects.png"
import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";

const Projects = () => {
  return (
    <section
        id='projects'
        className='max-w-containerSmall mx-auto py-20'
        >
            <SectionTitle titno={"02."} titlename={"Some Things I'have Built"} />

            {/* Projects */}
            <div className='w-full flex flex-col justify-center items-center gap-16'>
                {/* Project1 */}
                <div className='w-full h-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-28 mt-10'>
                      <div className='w-full lg:w-[650px]'>
                            <a href="https://code-connects.vercel.app/" target='_blank'>
                                <div className='relative group'>
                                    <img 
                                        src={codeconnects} alt="Project Images" 
                                        className='rounded-lg object-fill w-full h-[353px]'    
                                    />
                                    <div className="hidden md:inline-block absolute w-full h-full  bg-textGreen/30 rounded-md top-0 left-0 lg:group-hover:bg-transparent duration-300"></div>
                                </div>
                            </a>
                      </div>
                      <div className='w-full lg:w-1/2 flex flex-col justify-between gap-1 lg:gap-4 lg:-ml-32 z-10 p-4 lg:p-0'>
                             <h3 className='text-left lg:text-right text-textGreen font-semibold'>Featured Project</h3>
                             <h1 className='text-2xl text-left  lg:text-right text-textLight hover:text-textGreen font-bold font-titleFont'>CodeConnects</h1>
                             <div className='lg:bg-[#112240] lg:p-4 lg:shadow-xl z-10 text-textDark font-medium mb-2 lg:mb-0'>
                                  <p>A realtime collaborative code editor which can help programmer to code in a single place with live collaborating.</p>
                             </div>
                             <ul className='flex gap-4 text-sm text-textDark self-start lg:self-end font-bold flex-wrap mb-2 lg:mb-0'>
                                  <li>NextJS</li>
                                  <li>TailwindCSS</li>
                                  <li>TypeScript</li>
                                  <li>Liveblocks</li>
                                  <li>Shadcn</li>
                             </ul>
                             <ul className='flex gap-3 text-xl self-start lg:self-end cursor-pointer'>
                                  <li>
                                    <a href="https://github.com/Kamleshwarpradhan/CodeBuddy" target='_blank'>
                                        <span><FiGithub /></span>
                                    </a>
                                  </li>
                                  <li>
                                      <a href="https://code-connects.vercel.app/" target='_blank'>
                                         <span><LuExternalLink /></span>
                                      </a>
                                  </li>
                             </ul>
                      </div>
                </div>
                
                {/* Project2 */}
                <div className='w-full h-auto flex flex-col md:flex-row-reverse items-center justify-center gap-8 lg:gap-28 mt-10'>
                      <div className='w-full lg:w-[650px]'>
                            <a href="https://snapgram-cyan-zeta.vercel.app" target='_blank'>
                                <div className='relative group'>
                                    <img 
                                        src={Snapgram} alt="Project Images" 
                                        className='rounded-lg object-fill w-full h-[353px]'    
                                    />
                                    <div className="hidden md:inline-block absolute w-full h-full  bg-textGreen/30 rounded-md top-0 left-0 lg:group-hover:bg-transparent duration-300"></div>
                                </div>
                            </a>
                      </div>
                      <div className='w-full lg:w-1/2 flex flex-col justify-between gap-1 lg:gap-4 lg:-mr-32 z-10 p-4 lg:p-0'>
                             <h3 className='text-left text-textGreen font-semibold'>Featured Project</h3>
                             <h1 className='text-2xl text-left text-textLight hover:text-textGreen font-bold font-titleFont'>Snapgram</h1>
                             <div className='lg:bg-[#112240] lg:p-4 lg:shadow-xl z-10 text-textDark font-medium mb-2 lg:mb-0'>
                                  <p>It is a Project where we user can create update delete save and like the post Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur consequatur vero assumenda minima ratione.</p>
                             </div>
                             <ul className='flex gap-4 text-sm text-textDark self-start font-bold flex-wrap mb-2 lg:mb-0'>
                                  <li>React</li>
                                  <li>TailwindCSS</li>
                                  <li>TanstackQuery</li>
                                  <li>Appwrite</li>
                             </ul>
                             <ul className='flex gap-3 text-xl self-start cursor-pointer'>
                                  <li>
                                    <a href="https://github.com/Kamleshwarpradhan/Snapgram" target='_blank'>
                                      <span><FiGithub /></span>
                                    </a>
                                  </li>
                                  <li>
                                      <a href="https://snapgram-cyan-zeta.vercel.app/sign-in" target='_blank'>
                                        <span><LuExternalLink /></span>
                                      </a>
                                  </li>
                             </ul>
                      </div>
                </div>
                {/* */}
                 {/* Project3 */}
                 <div className='w-full h-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-28 mt-10'>
                      <div className='w-full lg:w-[650px]'>
                            <a href="https://eraser-io-clone.vercel.app/ " target='_blank'>
                                <div className='relative group'>
                                    <img 
                                        src={eraserclone} alt="Project Images" 
                                        className='rounded-lg object-fill w-full h-[353px]'    
                                    />
                                    <div className="hidden md:inline-block absolute w-full h-full  bg-textGreen/30 rounded-md top-0 left-0 lg:group-hover:bg-transparent duration-300"></div>
                                </div>
                            </a>
                      </div>
                      <div className='w-full lg:w-1/2 flex flex-col justify-between gap-1 lg:gap-4 lg:-ml-32 z-10 p-4 lg:p-0'>
                             <h3 className='text-left lg:text-right text-textGreen font-semibold'>Featured Project</h3>
                             <h1 className='text-2xl text-left  lg:text-right text-textLight hover:text-textGreen font-bold font-titleFont'>EraserClone</h1>
                             <div className='lg:bg-[#112240] lg:p-4 lg:shadow-xl z-10 text-textDark font-medium mb-2 lg:mb-0'>
                                  <p>It is an intresting project where user can enjoy the feeling of using a text editor and whiteboard both at the same place side by side.</p>
                             </div>
                             <ul className='flex gap-4 text-sm text-textDark self-start lg:self-end font-bold flex-wrap mb-2 lg:mb-0'>
                                  <li>React</li>
                                  <li>TailwindCSS</li>
                                  <li>Convex</li>
                                  <li>HyperUi</li>
                                  <li>Shadcn</li>
                             </ul>
                             <ul className='flex gap-3 text-xl self-start lg:self-end cursor-pointer'>
                                  <li>
                                    <a href="https://github.com/Kamleshwarpradhan/eraser_io-clone">
                                        <span><FiGithub /></span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://eraser-io-clone.vercel.app/">
                                        <span><LuExternalLink /></span>
                                    </a>
                                  </li>
                             </ul>
                      </div>
                </div>
            </div>
    </section>
  )
}

export default Projects