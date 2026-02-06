import { About } from './cmps/About'
import { Contact } from './cmps/Contact'
import { Navbar } from './cmps/Navar'
import { Projects } from './cmps/Projects'
import { Skills } from './cmps/Skills'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Certifications } from './cmps/Certifications'
import Aurora from './cmps/Aurora'

function App() {

  return (
    <div className='font-plusJakartaSans relative min-h-screen bg-black'>
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
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </div>
  )
}

export default App
