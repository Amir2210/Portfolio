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
    <div className='font-plusJakartaSans relative min-h-screen'>
      {/* Global Background */}
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent={false}
          autoRotate={0}
        />
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
