import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion"
export function Projects() {

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
    <motion.section className='align-elemets mt-4' id='projects'
      variants={fadeInAnimations}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true
      }}
    >
      <h1 className='gradient-text text-center capitalize text-3xl tracking-wider font-semibold my-4'>projects</h1>
      <div className='flex flex-col sm:flex-row gap-5 justify-between mt-8'>
        <a href='https://jobtracker-x1u9.onrender.com' target="_blank" className="h-64 sm:w-96 rounded-md bg-gradient-to-r from-gradient-purple via-gradient-red to-gradient-orange1 p-1 hover:scale-105 duration-300">
          <div className="flex flex-col h-full w-full  bg-bg-dark p-2">
            <div className='bg-white/5 size-14 flex items-center justify-center rounded-md '>
              <img src="src/assets/jobtracker.png" alt="" />
            </div>
            <div className='flex items-center mt-2 text-white gap-2'>
              <h1 className=" capitalize ">jobTracker</h1>
              <FaLink className='text-lg' />
            </div>
            <p className='text-gray text-sm mt-2'>📰 Job Tracker streamlines your job search by efficiently organizing a watch list. Easily manage the jobs you've applied for.</p>
            <div className='flex flex-wrap text-white text-sm gap-3 mt-2 capitalize items-center'>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>react</span>
              </div>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>t.S</span>
              </div>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>node.js</span>
              </div>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>express.js</span>
              </div>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>mongoDB</span>
              </div>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>tailwind</span>
              </div>
            </div>
          </div>
        </a>
        <a href='https://comfy-store-xaft.onrender.com' target="_blank" className="h-64 sm:w-96 rounded-md bg-gradient-to-r from-gradient-purple via-gradient-red to-gradient-orange1 p-1 hover:scale-105 duration-300">
          <div className="flex flex-col h-full w-full  bg-bg-dark p-2">
            <div className='bg-white/5 size-14 flex items-center justify-center p-2  rounded-md '>
              <img src="src/assets/comfystore.png" alt="" />
            </div>
            <div className='flex items-center mt-2 text-white gap-2'>
              <h1 className=" capitalize ">comfyStore</h1>
              <FaLink className='text-lg' />
            </div>
            <p className='text-gray text-sm mt-2'>🪑 ComfyStore app offers stylish furniture for every room. Shop and customize your perfect pieces with ease.</p>
            <div className='flex flex-wrap text-white text-sm gap-3 mt-2 capitalize items-center'>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>react</span>
              </div>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>node.js</span>
              </div>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>express.js</span>
              </div>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>mongoDB</span>
              </div>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>tailwind</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </motion.section>
  )
}