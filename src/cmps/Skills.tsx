import { motion } from "framer-motion"
import js from '../assets/imgs/js.png'
import css from '../assets/imgs/css.png'
import html from '../assets/imgs/html.png'
import ts from '../assets/imgs/ts.png'
import react from '../assets/imgs/react.png'
import sass from '../assets/imgs/sass.png'
import tailwind from '../assets/imgs/tailwind.png'
import redux from '../assets/imgs/redux.png'
import node from '../assets/imgs/node.png'
import mongo from '../assets/imgs/mongo.png'
import firebase from '../assets/imgs/firebase.png'
import nextjs from '../assets/imgs/nextjs.png'

const skills = [
  { img: js, alt: "JavaScript" },
  { img: css, alt: "CSS" },
  { img: html, alt: "HTML" },
  { img: ts, alt: "TypeScript" },
  { img: react, alt: "React" },
  { img: sass, alt: "Sass" },
  { img: tailwind, alt: "Tailwind" },
  { img: redux, alt: "Redux" },
  { img: node, alt: "Node.js" },
  { img: mongo, alt: "MongoDB" },
  { img: firebase, alt: "Firebase" },
  { img: nextjs, alt: "Next.js" },
]

export function Skills() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h2 className='text-2xl sm:text-3xl font-semibold text-center mb-12 drop-shadow-lg'>
        <span className="gradient-text">My Skills</span>
      </h2>
      
      <div className="backdrop-blur-xl bg-black/60 border border-white/20 rounded-3xl p-8 shadow-2xl">
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center'>
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className='group p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer'
              whileHover={{ scale: 1.1 }}
            >
              <img 
                className='w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300' 
                src={skill.img} 
                alt={skill.alt} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
