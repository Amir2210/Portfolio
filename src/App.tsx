import { About } from './cmps/About'
import { Contact } from './cmps/Contact'
import { Navbar } from './cmps/Navar'
import { Projects } from './cmps/Projects'
import { Skills } from './cmps/Skills'
import { Experience } from './cmps/Experience'
import { Footer } from './cmps/Footer'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Certifications } from './cmps/Certifications'
import Aurora from './cmps/Aurora'
import { CustomCursor } from './cmps/CustomCursor'
import { motion, useScroll } from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll()

  return (
    <div className='font-plusJakartaSans relative min-h-screen bg-black'>
      {/* Page Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 origin-left z-[100] bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        style={{ scaleX: scrollYProgress }}
      />

      <CustomCursor />
      
      {/* Global Background - Aurora animated background */}
      <div className="fixed inset-0 z-0 w-screen h-screen">
        <Aurora
          colorStops={["#000000", "#B19EEF", "#4462f8"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>
      {/* Content layer above background */}
      <div className="relative z-10">
        <ToastContainer position='top-center' autoClose={2000} />
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
