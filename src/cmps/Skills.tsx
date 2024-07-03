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
export function Skills() {

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

  return (
    <motion.section className='align-elemets px-4 py-2 mt-12'
      variants={fadeInAnimations}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true
      }}
    >
      <h1 className='capitalize text-2xl gradient-text text-center font-semibold my-4'>my skills:</h1>
      <div className='grid grid-cols-2 sm:grid-cols-5 sm:gap-3 place-items-center mt-8'>
        <div className='sm:p-4'>
          <img className='size-14' src={js} alt="js logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src={css} alt="css logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src={html} alt="html logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src={ts} alt="ts logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src={react} alt="react logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src={sass} alt="sass logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src={tailwind} alt="tailwind logo" />
        </div >
        <div className='p-2 sm:p-4'>
          <img className='size-14' src={redux} alt="redux logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src={node} alt="node logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src={mongo} alt="mongo logo" />
        </div>
      </div>
    </motion.section>
  )
}