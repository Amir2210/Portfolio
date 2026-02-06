import { motion } from "framer-motion"
import avatar from '../assets/imgs/avatar.png'
import resume from '../assets/certifications/resume.pdf'

export function About() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const avatarVariants = {
    initial: { opacity: 0, scale: 0.8, x: 50 },
    animate: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
    }
  }

  return (
    <motion.section 
      className='align-elemets text-white pt-28 pb-12'
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className='sm:flex gap-8 items-center justify-center' id='about'>
        <motion.div className="flex-1 max-w-xl" variants={containerVariants}>
          <motion.h1 
            className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-lg'
            variants={itemVariants}
          >
            <span className="gradient-text">Amir Yankolovich</span>
          </motion.h1>
          <motion.h2 
            className='mt-4 text-xl sm:text-2xl text-white font-medium drop-shadow-md'
            variants={itemVariants}
          >
            Full Stack / Frontend Developer
          </motion.h2>
          <motion.p 
            className='mt-6 text-white/90 leading-relaxed text-base drop-shadow-sm'
            variants={itemVariants}
          >
            Full Stack programmer specializing in Frontend development. I focus on creating engaging user experiences and solving complex problems. I really like reading books and sports.
          </motion.p>
          
          {/* Buttons */}
          <motion.div className='flex flex-wrap gap-4 mt-8' variants={itemVariants}>
            <a 
              href={resume} 
              target='_blank'
              className='px-6 py-3 backdrop-blur-xl bg-white/20 border border-white/30 rounded-full text-white font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg'
            >
              Download CV
            </a>
            <a 
              href="#certifications"
              className='px-6 py-3 backdrop-blur-xl bg-black/40 border border-white/20 rounded-full text-white hover:bg-black/50 hover:scale-105 transition-all duration-300 shadow-lg'
            >
              Certifications
            </a>
          </motion.div>
        </motion.div>
        
        {/* Avatar */}
        <motion.div 
          className="mt-8 sm:mt-0 flex justify-center"
          variants={avatarVariants}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-3xl"></div>
            <img 
              src={avatar} 
              alt="avatar" 
              className="relative w-48 sm:w-64 lg:w-72 drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
