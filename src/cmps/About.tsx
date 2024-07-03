import { motion } from "framer-motion"
import avatar from '../assets/imgs/avatar.png'
export function About() {

  const fadeInAnimations = {
    initial: {
      opacity: 0,
      x: -200
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8
      }
    }
  }

  return (
    <motion.section className='align-elemets text-white'
      variants={fadeInAnimations}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true
      }}
    >
      <div className='sm:mt-10 mt-4 sm:flex gap-5 justify-center' id='about'>
        <div>
          <h1 className='justify-center flex capitalize text-4xl sm:text-6xl gradient-text font-semibold tracking-wider'>amir yankolovich</h1>
          <h2 className='capitalize mt-4 text-xl sm:text-3xl justify-center flex sm:justify-start'>full stack / frontend developer.</h2>
          <p className='mt-4 tracking-wider text-gray text-center sm:text-left'>Full Stack programmer specializing in Frontend development. I focus on creating engaging user experiences and solving complex problems. I really like reading books and sports</p>
          <div className='hidden sm:flex sm:flex-wrap gap-5 my-4 items-center'>
            <div className='capitalize cursor-pointer purple-outline'>download CV</div>
            <div className='capitalize cursor-pointer purple-outline'><a href="#certifications">licenses & certifications</a></div>
          </div>
        </div>
        <div>
          <img src={avatar} alt="avatar" />
          <div className='flex flex-wrap justify-center sm:hidden gap-5 my-4 items-center'>
            <div className='capitalize cursor-pointer purple-outline'>download CV</div>
            <div className='capitalize cursor-pointer purple-outline'>licenses & certifications</div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}