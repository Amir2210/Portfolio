import { About } from './cmps/About'
import { Contact } from './cmps/Contact'
import { Navbar } from './cmps/Navar'
import { Projects } from './cmps/Projects'
import { Skills } from './cmps/Skills'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Certifications } from './cmps/Certifications'
import ColorBends from './cmps/ColorBends'

function App() {

  return (
    <div className='font-plusJakartaSans relative min-h-screen bg-black'>
      {/* Global Background - Black base with animated overlay */}
      <div className="fixed inset-0 -z-10 w-screen h-screen bg-black">
        <div className="absolute inset-0 opacity-60">
          <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={0}
            speed={0.15}
            scale={1.2}
            frequency={0.8}
            warpStrength={0.8}
            mouseInfluence={0.5}
            parallax={0.3}
            noise={0.05}
            transparent={false}
            autoRotate={0}
          />
        </div>
      </div>
      <ToastContainer position='top-center' autoClose={2000} />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App
