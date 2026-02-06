import { FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import jonTracker from '../assets/imgs/jobtracker.png'
import comfyStore from '../assets/imgs/comfystore.png'
import jobTrackerScreenShot from '../assets/projectScreenshots/jobtrackerScreenshot.png'
import comfyScreenShot from '../assets/projectScreenshots/comfyScreenShot.png'

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
  }
]

export function Projects() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
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
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <motion.section 
      className='align-elemets py-16' 
      id='projects'
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 
        className='text-2xl sm:text-3xl font-semibold text-center mb-12 drop-shadow-lg'
        variants={titleVariants}
      >
        <span className="gradient-text">Projects</span>
      </motion.h2>
      
      <div className='grid sm:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <motion.a 
            key={index}
            href={project.link} 
            target="_blank"
            variants={itemVariants}
            className="group relative overflow-hidden backdrop-blur-xl bg-black/70 border border-white/20 rounded-2xl p-6 hover:bg-black/80 hover:border-white/30 transition-all duration-500 shadow-xl"
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Project Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center p-2 shadow-lg">
                    <img src={project.icon} alt={project.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg flex items-center gap-2 drop-shadow-md">
                      {project.name}
                      <FaExternalLinkAlt className="text-xs text-white/50 group-hover:text-white transition-colors" />
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-white/15 text-white/90 border border-white/20"
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
