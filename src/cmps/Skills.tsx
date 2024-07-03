import { motion } from "framer-motion"
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
          <img className='size-14' src="src/assets/imgs/js.png" alt="js logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/imgs/css.png" alt="css logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/imgs/html.png" alt="html logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/imgs/ts.png" alt="ts logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/imgs/react.png" alt="react logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/imgs/sass.png" alt="sass logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/imgs/tailwind.png" alt="tailwind logo" />
        </div >
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/imgs/redux.png" alt="redux logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/imgs/node.png" alt="node logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/imgs/mongo.png" alt="mongo logo" />
        </div>
      </div>
    </motion.section>
  )
}