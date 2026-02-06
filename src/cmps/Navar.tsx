import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import avatar from '../assets/imgs/avatar.png'

export function Navbar() {
  return (
    <nav className='fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl'>
      <div className="backdrop-blur-xl bg-black/50 border border-white/20 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className='size-10'>
            <img className='rounded-full shadow-lg' src={avatar} alt="logo" />
          </div>
          
          {/* Desktop Navigation */}
          <ul className='items-center gap-6 text-white font-medium hidden md:flex'>
            <li><a href="#about" className='hover:text-white/70 transition-colors duration-200'>Home</a></li>
            <li><a href="#projects" className='hover:text-white/70 transition-colors duration-200'>Projects</a></li>
            <li><a href="#contact" className='hover:text-white/70 transition-colors duration-200'>Contact</a></li>
          </ul>

          {/* Social Links */}
          <div className='hidden md:flex items-center gap-3'>
            <a href="https://www.linkedin.com/in/amir-yankolovich/" target="_blank" className="text-white hover:text-white/70 transition-colors duration-200">
              <FaLinkedin className='text-xl' />
            </a>
            <a href="https://github.com/Amir2210" target="_blank" className="text-white hover:text-white/70 transition-colors duration-200">
              <FaGithub className='text-xl' />
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl backdrop-blur-xl bg-black/60 border border-white/20 rounded-2xl w-52">
              <li><a href="#about" className='text-white hover:text-white/70 hover:bg-white/10'>Home</a></li>
              <li><a href="#projects" className='text-white hover:text-white/70 hover:bg-white/10'>Projects</a></li>
              <li><a href="#contact" className='text-white hover:text-white/70 hover:bg-white/10'>Contact</a></li>
              <li className='border-t border-white/20 mt-2 pt-2'>
                <div className='flex gap-3 justify-center'>
                  <a href="https://www.linkedin.com/in/amir-yankolovich/" target="_blank" className="text-white hover:text-white/70">
                    <FaLinkedin className='text-xl' />
                  </a>
                  <a href="https://github.com/Amir2210" target="_blank" className="text-white hover:text-white/70">
                    <FaGithub className='text-xl' />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}