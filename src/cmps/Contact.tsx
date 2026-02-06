import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [txt, setTxt] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    if (form.current) {
      emailjs.sendForm('service_12b795o', 'template_b52o50f', form.current, 'Vya5pj6jvkGDYwvFl')
        .then(
          () => {
            setName('')
            setEmail('')
            setTxt('')
            toast.success('Message sent successfully!')
            setIsLoading(false)
          },
          () => {
            toast.error('Failed to send message')
            setIsLoading(false)
          },
        )
    }
  }

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const socialVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "backOut" }
    }
  }

  return (
    <motion.section 
      className='align-elemets py-16 pb-24' 
      id='contact'
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 
        className='text-2xl sm:text-3xl font-semibold text-center mb-6 drop-shadow-lg'
        variants={titleVariants}
      >
        <span className="gradient-text">Get In Touch</span>
      </motion.h2>
      
      <motion.div 
        className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-3xl p-6 max-w-md mx-auto mb-8"
        variants={itemVariants}
      >
        <p className="text-white text-center">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div 
        className='flex justify-center items-center gap-4 mb-10'
        variants={containerVariants}
      >
        <motion.a 
          href="https://www.linkedin.com/in/amir-yankolovich/" 
          target="_blank"
          className="p-3 backdrop-blur-xl bg-black/60 border border-white/20 rounded-full text-white hover:bg-black/70 hover:border-white/30 transition-all duration-300 shadow-lg"
          variants={socialVariants}
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin className='text-xl' />
        </motion.a>
        <motion.a 
          href="https://github.com/Amir2210" 
          target="_blank"
          className="p-3 backdrop-blur-xl bg-black/60 border border-white/20 rounded-full text-white hover:bg-black/70 hover:border-white/30 transition-all duration-300 shadow-lg"
          variants={socialVariants}
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub className='text-xl' />
        </motion.a>
      </motion.div>

      {/* Contact Form */}
      <motion.div className="max-w-md mx-auto" variants={itemVariants}>
        <form 
          ref={form} 
          onSubmit={sendEmail}
          className="backdrop-blur-xl bg-black/70 border border-white/20 rounded-3xl p-8 shadow-2xl"
        >
          <div className="space-y-5">
            <div>
              <input 
                onChange={(ev) => setName(ev.target.value)} 
                value={name} 
                placeholder='Your Name' 
                className='w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors' 
                type="text" 
                name="from_name" 
                required 
              />
            </div>
            <div>
              <input 
                onChange={(ev) => setEmail(ev.target.value)} 
                value={email} 
                placeholder='Your Email' 
                className='w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors' 
                type="email" 
                name="from_email" 
                required 
              />
            </div>
            <div>
              <textarea 
                onChange={(ev) => setTxt(ev.target.value)} 
                value={txt} 
                placeholder='Your Message' 
                rows={4}
                className='w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none' 
                name="message" 
                required 
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className='w-full py-3 backdrop-blur-xl bg-white/15 border border-white/30 rounded-xl text-white font-medium hover:bg-white/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg'
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  )
}
