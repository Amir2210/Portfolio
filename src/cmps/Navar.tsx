import { useEffect, useState } from "react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import avatar from '../assets/imgs/avatar.png'

const navLinks = [
  { id: "about", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className='fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl'>
      <div className="backdrop-blur-xl bg-black/70 border border-white/20 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className='size-10'>
            <img className='rounded-full shadow-lg h-full w-full object-cover' src={avatar} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <ul className='items-center gap-6 text-white font-medium hidden md:flex'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative transition-colors duration-200 ${
                    activeSection === link.id ? 'text-white' : 'text-white/60 hover:text-white/90'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className='absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500' />
                  )}
                </a>
              </li>
            ))}
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
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl backdrop-blur-xl bg-black/80 border border-white/20 rounded-2xl w-52">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`hover:bg-white/10 ${
                      activeSection === link.id ? 'text-white bg-white/10' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
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