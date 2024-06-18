import { About } from './cmps/About'
import { Contact } from './cmps/Contact'
import { Navbar } from './cmps/Navar'
import { Projects } from './cmps/Projects'
import { Skills } from './cmps/Skills'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className='font-plusJakartaSans bg-bg-dark'>
      <ToastContainer position='top-center' autoClose={2000} />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
