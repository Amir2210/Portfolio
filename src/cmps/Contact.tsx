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

  const fadeInVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.section 
      className='align-elemets py-16 pb-24' 
      id='contact'
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="inline-block w-full text-center mb-6">
        <h2 className='inline-block text-2xl sm:text-3xl font-semibold backdrop-blur-xl bg-black/60 px-8 py-3 rounded-full border border-white/10'>
          <span className="gradient-text">Get In Touch</span>
        </h2>
      </div>
      
      <div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-3xl p-6 max-w-md mx-auto mb-8">
        <p className="text-white text-center">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </div>

      {/* Social Links */}
      <div className='flex justify-center items-center gap-4 mb-10'>
        <a 
          href="https://www.linkedin.com/in/amir-yankolovich/" 
          target="_blank"
          className="p-3 backdrop-blur-xl bg-black/60 border border-white/20 rounded-full text-white hover:bg-black/70 hover:border-white/30 transition-all duration-300 shadow-lg"
        >
          <FaLinkedin className='text-xl' />
        </a>
        <a 
          href="https://github.com/Amir2210" 
          target="_blank"
          className="p-3 backdrop-blur-xl bg-black/60 border border-white/20 rounded-full text-white hover:bg-black/70 hover:border-white/30 transition-all duration-300 shadow-lg"
        >
          <FaGithub className='text-xl' />
        </a>
      </div>

      {/* Contact Form */}
      <div className="max-w-md mx-auto">
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
