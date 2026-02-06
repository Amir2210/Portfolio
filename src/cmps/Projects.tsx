import { FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import toystore from '../assets/imgs/favicon.ico'
import jonTracker from '../assets/imgs/jobtracker.png'
import comfyStore from '../assets/imgs/comfystore.png'
import weatherApp from '../assets/imgs/weather.png'
import globeTrek from '../assets/imgs/globetrek.png'
import countryExplorer from '../assets/imgs/israel.png'
import jobTrackerScreenShot from '../assets/projectScreenshots/jobtrackerScreenshot.png'
import comfyScreenShot from '../assets/projectScreenshots/comfyScreenShot.png'
import weatherAppScreenshot from '../assets/projectScreenshots/weatherAppScreenshot.png'
import globeTrekScreenshot from '../assets/projectScreenshots/globeTrekScreenshot.png'
import countryExplorerScreenshot from '../assets/projectScreenshots/countryExplorerScreenshot.png'
import toyStoreScreenShot from '../assets/projectScreenshots/toystore.png'

const projects = [
  {
    name: "JobTracker",
    description: "Job Tracker streamlines your job search by efficiently organizing a watch list. Easily manage the jobs you've applied for.",
    icon: jonTracker,
    screenshot: jobTrackerScreenShot,
    link: "https://jobtracker-x1u9.onrender.com/",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind"]
  },
  {
    name: "ComfyStore",
    description: "ComfyStore offers stylish furniture for every room. Shop and customize your perfect pieces with ease.",
    icon: comfyStore,
    screenshot: comfyScreenShot,
    link: "https://comfy-store-xaft.onrender.com",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"]
  },
  {
    name: "Weather App",
    description: "Weather application that provides current weather data and a 7-day forecast for any city with detailed information.",
    icon: weatherApp,
    screenshot: weatherAppScreenshot,
    link: "https://weather-app-lovat-eight-87.vercel.app/",
    tech: ["React", "Next.js", "TypeScript", "Tailwind"]
  },
  {
    name: "GlobeTrek",
    description: "GlobeTrek helps users plan and discover their next adventure trek with detailed destination information.",
    icon: globeTrek,
    screenshot: globeTrekScreenshot,
    link: "https://globetrek.vercel.app/",
    tech: ["React", "SCSS"]
  },
  {
    name: "Country Explorer",
    description: "Web application that integrates with the REST Countries API to display and filter country data.",
    icon: countryExplorer,
    screenshot: countryExplorerScreenshot,
    link: "https://country-explorer2210.netlify.app/",
    tech: ["React", "React Query", "TypeScript", "Tailwind"]
  },
  {
    name: "ToyStore",
    description: "Firestore-based toy management application where users can add, edit, delete, and filter toys.",
    icon: toystore,
    screenshot: toyStoreScreenShot,
    link: "https://toystore-sigma.vercel.app/",
    tech: ["React", "Context API", "Firebase", "Tailwind"]
  }
]

export function Projects() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.section 
      className='align-elemets py-16' 
      id='projects'
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h2 className='text-2xl sm:text-3xl font-semibold text-center mb-12'>
        <span className="gradient-text">Projects</span>
      </h2>
      
      <div className='grid sm:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <motion.a 
            key={index}
            href={project.link} 
            target="_blank"
            variants={itemVariants}
            className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            whileHover={{ y: -5 }}
          >
            {/* Project Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center p-2">
                    <img src={project.icon} alt={project.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                      {project.name}
                      <FaExternalLinkAlt className="text-xs text-white/40 group-hover:text-white/80 transition-colors" />
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/70 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Preview Image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <img 
                src={project.screenshot} 
                alt={project.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
