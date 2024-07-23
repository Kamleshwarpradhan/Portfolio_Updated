import './App.css'
import About from './Component/About'
import Archive from './Component/Archive'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import HeroSection from './Component/HeroSection'
import LeftSidebar from './Component/LeftSidebar'
import Navbar from './Component/Navbar'
import Projects from './Component/Projects'
import RightSidebar from './Component/RightSidebar'
import {motion} from "framer-motion"

function App() {
  
  return (
    <main className='h-screen w-full font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
          <Navbar />
        
          {/* Hero section */}
          <div className='h-[88vh] w-full lg:flex gap-20 items-center justify-between'>
                <motion.div 
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{delay: 1.5}}
                  className='hidden xl:inline-flex h-full w-32 fixed left-8 -bottom-40'>
                      <LeftSidebar />
                </motion.div>
                <div className='h-[88vh] mx-auto p-4'>
                    <HeroSection />
                    {/* About */}
                    <About />

                    {/* Projects Section */}
                    <Projects />

                    {/* Archive Section */}
                    <Archive />

                    {/* Contact Section */}
                    <Contact />

                    {/* Footer Section  */}
                    <Footer />
                </div>
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{delay: 1.5}}
                  className='hidden xl:inline-flex h-full w-32 fixed right-16 bottom-0'>
                     <RightSidebar />
                </motion.div>
          </div>
    </main>
  )
}

export default App
