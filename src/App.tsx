import { About } from './cmps/About'
import { Navbar } from './cmps/Navar'
import { Projects } from './cmps/Projects'
import { Skills } from './cmps/Skills'

function App() {

  return (
    <div className='font-plusJakartaSans bg-bg-dark'>
      <Navbar />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
