import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { PiLineVerticalLight } from "react-icons/pi"

export function Navbar() {
  return (
    <nav className='bg-bg-dark'>
      <div className="align-elemets flex justify-between min-h-20 w-full  items-center">
        <div className='size-12'>
          <img className='rounded-full' src="src/assets/favicon.jpg" alt="logo" />
        </div>
        <ul className='items-center gap-4 text-white capitalize hidden md:flex'>
          <li className='gradient-text'><a href="">about</a></li>
          <li className='gradient-text'><a href=""> projects</a></li>
          <li className='gradient-text'><a href="">mini components</a> </li>
          <li className='gradient-text'><a href="">connect</a></li>
          <li><PiLineVerticalLight /></li>
          <li><a href="https://www.linkedin.com/in/amir-yankolovich/" target="_blank"><FaLinkedin className='text-2xl hover:text-linkedin duration-100' /></a></li>
          <li><a href="https://github.com/Amir2210" target="_blank"><FaGithub className='text-2xl hover:text-github duration-100' /></a></li>
        </ul>
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-link text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0">
            <li className='gradient-text'><a href="">about</a></li>
            <li className='gradient-text'><a href=""> projects</a></li>
            <li className='gradient-text'><a href="">mini components</a> </li>
            <li className='gradient-text'><a href="">connect</a></li>
            <li><PiLineVerticalLight /></li>
            <li><a href="https://www.linkedin.com/in/amir-yankolovich/" target="_blank"><FaLinkedin className='text-2xl hover:text-linkedin duration-100' /></a></li>
            <li><a href="https://github.com/Amir2210" target="_blank"><FaGithub className='text-2xl hover:text-github duration-100' /></a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}