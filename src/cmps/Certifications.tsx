import major from '../assets/certifications/major.pdf'
import colonel from '../assets/certifications/colonel.pdf'
import bootcamp from '../assets/certifications/bootcamp.pdf'
import electronic from '../assets/certifications/electronic.pdf'
import web from '../assets/certifications/web.pdf'
import udemy from '../assets/certifications/udemy.pdf'
import udemy2 from '../assets/certifications/udemy2.pdf'
import { FaFilePdf } from "react-icons/fa6"
import { motion } from "framer-motion"


const fadeInAnimations = {
  initial: {
    opacity: 0,
    x: 200
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8
    }
  }
}


export function Certifications() {
  return (
    <motion.section className='align-elemets mt-12' id='certifications'
      variants={fadeInAnimations}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true
      }}
    >
      <h1 className='gradient-text text-center capitalize text-3xl tracking-wider font-semibold my-4'>licenses & certifications</h1>
      <div className='flex flex-wrap justify-center text-white mt-8 sm:gap-4 gap-6'>
        <a href={udemy} target='_blank' className='capitalize cursor-pointer purple-outline flex items-center justify-center gap-2'>
          <h3>udemy - HTML & CSS</h3>
          <FaFilePdf className='text-xl' />
        </a>
        <a href={udemy2} target='_blank' className='capitalize cursor-pointer purple-outline flex items-center justify-center gap-2'>
          <h3>udemy - React, next.js & TypeScript</h3>
          <FaFilePdf className='text-xl' />
        </a>
        <a href={bootcamp} target='_blank' className='capitalize cursor-pointer purple-outline flex items-center justify-center gap-2'>
          <h3>fullstack bootcamp certificate</h3>
          <FaFilePdf className='text-xl' />
        </a>
        <a href={electronic} target='_blank' className='capitalize cursor-pointer purple-outline flex items-center justify-center gap-2'>
          <h3>electronics practical engineer diploma</h3>
          <FaFilePdf className='text-xl' />
        </a>
        <a href={web} target='_blank' className='capitalize cursor-pointer purple-outline flex items-center justify-center gap-2'>
          <h3>web development Military course</h3>
          <FaFilePdf className='text-xl' />
        </a>
        <a href={colonel} target='_blank' className='capitalize cursor-pointer purple-outline flex items-center justify-center gap-2'>
          <h3>base military honor from colonel</h3>
          <FaFilePdf className='text-xl' />
        </a>
        <a href={major} target='_blank' className='capitalize cursor-pointer purple-outline flex items-center justify-center gap-2'>
          <h3>military honor from Major</h3>
          <FaFilePdf className='text-xl' />
        </a>

      </div>
    </motion.section>
  )
}