import major from '../assets/certifications/major.pdf'
import colonel from '../assets/certifications/colonel.pdf'
import bootcamp from '../assets/certifications/bootcamp.pdf'
import electronic from '../assets/certifications/electronic.pdf'
import web from '../assets/certifications/web.pdf'
import udemy from '../assets/certifications/udemy.pdf'
import udemy2 from '../assets/certifications/udemy2.pdf'
import { FaFilePdf } from "react-icons/fa6"
import { motion } from "framer-motion"

const certifications = [
  { name: "Udemy - HTML & CSS", file: udemy },
  { name: "Udemy - React, Next.js & TypeScript", file: udemy2 },
  { name: "Fullstack Bootcamp Certificate", file: bootcamp },
  { name: "Electronics Practical Engineer", file: electronic },
  { name: "Web Development Military Course", file: web },
  { name: "Military Honor from Colonel", file: colonel },
  { name: "Military Honor from Major", file: major },
]

export function Certifications() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <motion.section 
      className='align-elemets py-16' 
      id='certifications'
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h2 className='text-2xl sm:text-3xl font-semibold text-center mb-12'>
        <span className="gradient-text">Certifications</span>
      </h2>
      
      <div className='flex flex-wrap justify-center gap-4'>
        {certifications.map((cert, index) => (
          <motion.a 
            key={index}
            href={cert.file} 
            target='_blank'
            variants={itemVariants}
            className='group flex items-center gap-3 px-5 py-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-full text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300'
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-sm">{cert.name}</span>
            <FaFilePdf className='text-lg text-white/40 group-hover:text-white/80 transition-colors' />
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
