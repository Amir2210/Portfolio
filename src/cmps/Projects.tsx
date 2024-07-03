import { FaLink } from "react-icons/fa"
import { motion } from "framer-motion"
import jonTracker from '../assets/imgs/jobtracker.png'
import comfyStore from '../assets/imgs/comfystore.png'
import weatherApp from '../assets/imgs/weather.png'
import globeTrek from '../assets/imgs/globetrek.png'
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
    <motion.section className='align-elemets mt-12' id='projects'
      variants={fadeInAnimations}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true
      }}
    >
      <h1 className='gradient-text text-center capitalize text-3xl tracking-wider font-semibold my-4'>projects</h1>
      <div className='flex flex-col sm:grid sm:grid-cols-2 gap-y-5  mt-8'>
        <a href='https://jobtracker-x1u9.onrender.com' target="_blank" className="sm:h-72 sm:w-96 rounded-md bg-gradient-to-r from-gradient-purple via-gradient-red to-gradient-orange1 p-1 hover:scale-105 duration-300">
          <div className="rounded-md flex flex-col h-full w-full  bg-bg-dark p-2">
            <div className='bg-white/5 size-14 flex items-center justify-center rounded-md '>
              <img src={jonTracker} alt="app logo" />
            </div>
            <div className='flex items-center mt-2 text-white gap-2'>
              <h1 className=" capitalize ">jobTracker</h1>
              <FaLink className='text-lg' />
            </div>
            <p className='text-gray text-sm mt-4'>📰 Job Tracker streamlines your job search by efficiently organizing a watch list. Easily manage the jobs you've applied for.</p>
            <div className='flex flex-wrap text-white text-sm gap-3 mt-4 sm:mt-auto capitalize items-center'>
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
        <a href='https://comfy-store-xaft.onrender.com' target="_blank" className="sm:h-72 sm:w-96 rounded-md bg-gradient-to-r from-gradient-purple via-gradient-red to-gradient-orange1 p-1 hover:scale-105 duration-300">
          <div className="rounded-md flex flex-col h-full w-full  bg-bg-dark p-2">
            <div className='bg-white/5 size-14 flex items-center justify-center p-2  rounded-md '>
              <img src={comfyStore} alt="app logo" />
            </div>
            <div className='flex items-center mt-2 text-white gap-2'>
              <h1 className=" capitalize ">comfyStore</h1>
              <FaLink className='text-lg' />
            </div>
            <p className='text-gray text-sm mt-4'>🪑 ComfyStore  offers stylish furniture for every room. Shop and customize your perfect pieces with ease.</p>
            <div className='flex flex-wrap text-white text-sm gap-3 mt-4 sm:mt-auto capitalize items-center'>
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
        <a href='https://weather-app-lovat-eight-87.vercel.app/' target="_blank" className="sm:h-72 sm:w-96 rounded-md bg-gradient-to-r from-gradient-purple via-gradient-red to-gradient-orange1 p-1 hover:scale-105 duration-300">
          <div className="rounded-md flex flex-col h-full w-full  bg-bg-dark p-2">
            <div className='bg-white/5 size-14 flex items-center justify-center p-2  rounded-md '>
              <img src={weatherApp} alt="app logo" />
            </div>
            <div className='flex items-center mt-2 text-white gap-2'>
              <h1 className=" capitalize ">weather app</h1>
              <FaLink className='text-lg' />
            </div>
            <p className='text-gray text-sm mt-4'>🌞 weather application that provides current weather data and a 7-day forecast for any city. It allows users to search for a city and get detailed weather information including temperature, humidity, wind speed, and more.</p>
            <div className='flex flex-wrap text-white text-sm gap-3 mt-4 sm:mt-auto capitalize items-center'>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>react</span>
              </div>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>next.js</span>
              </div>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>T.S</span>
              </div>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>tailwind</span>
              </div>
            </div>
          </div>
        </a>
        <a href='https://globetrek.vercel.app/' target="_blank" className="sm:h-72 sm:w-96 rounded-md bg-gradient-to-r from-gradient-purple via-gradient-red to-gradient-orange1 p-1 hover:scale-105 duration-300">
          <div className="rounded-md flex flex-col h-full w-full  bg-bg-dark p-2">
            <div className='bg-white/5 size-14 flex items-center justify-center p-2  rounded-md '>
              <img src={globeTrek} alt="app logo" />
            </div>
            <div className='flex items-center mt-2 text-white gap-2'>
              <h1 className=" capitalize ">globeTrek</h1>
              <FaLink className='text-lg' />
            </div>
            <p className='text-gray text-sm mt-4'>🌎 GlobeTrek app designed to help users plan and discover their next adventure trek. Users can explore various destinations, view details about each trek, and access helpful resources for planning their journey.</p>
            <div className='flex flex-wrap text-white text-sm gap-3 mt-4 sm:mt-auto capitalize items-center'>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>react</span>
              </div>
              <div className='bg-white/5 p-1 rounded-md'>
                <span>scss</span>
              </div>
            </div>
          </div>
        </a>
      </div>

    </motion.section>
  )
}