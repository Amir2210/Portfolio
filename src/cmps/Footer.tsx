import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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
    <motion.footer 
      className="align-elemets py-8 border-t border-white/10"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <motion.p 
          className="text-white/60 text-sm"
          variants={itemVariants}
        >
          © {currentYear} Amir Yankolovich. All rights reserved.
        </motion.p>

        {/* Social Links */}
        <motion.div 
          className="flex items-center gap-4"
          variants={itemVariants}
        >
          <a 
            href="https://www.linkedin.com/in/amir-yankolovich/" 
            target="_blank"
            className="text-white/60 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a 
            href="https://github.com/Amir2210" 
            target="_blank"
            className="text-white/60 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>
        </motion.div>

        {/* Made with love */}
        <motion.p 
          className="text-white/60 text-sm flex items-center gap-1"
          variants={itemVariants}
        >
          Made with <FaHeart className="text-red-500 text-xs" /> using React
        </motion.p>
      </div>
    </motion.footer>
  )
}
