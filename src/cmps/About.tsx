import { motion } from "framer-motion"
import avatar from '../assets/imgs/avatar.png'
import resume from '../assets/certifications/resume.pdf'

export function About() {
  const fadeInAnimations = {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      className='align-elemets text-white pt-28 pb-12'
      variants={fadeInAnimations}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className='sm:flex gap-8 items-center justify-center' id='about'>
        <div className="flex-1 max-w-xl">
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight'>
            <span className="gradient-text">Amir Yankolovich</span>
          </h1>
          <h2 className='mt-4 text-xl sm:text-2xl text-white/80 font-light'>
            Full Stack / Frontend Developer
          </h2>
          <p className='mt-6 text-white/60 leading-relaxed'>
            Full Stack programmer specializing in Frontend development. I focus on creating engaging user experiences and solving complex problems. I really like reading books and sports.
          </p>
          
          {/* Buttons */}
          <div className='flex flex-wrap gap-4 mt-8'>
            <a 
              href={resume} 
              target='_blank'
              className='px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-white/90 hover:bg-white/20 hover:text-white transition-all duration-300'
            >
              Download CV
            </a>
            <a 
              href="#certifications"
              className='px-6 py-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-full text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300'
            >
              Certifications
            </a>
          </div>
        </div>
        
        {/* Avatar */}
        <motion.div 
          className="mt-8 sm:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <img 
              src={avatar} 
              alt="avatar" 
              className="relative w-48 sm:w-64 lg:w-72"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
