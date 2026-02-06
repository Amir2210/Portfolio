import { motion } from "framer-motion"
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa"

const experience = [
  {
    title: "Frontend Developer",
    company: "Amdocs",
    type: "Full-time",
    period: "Jul 2025 - Present",
    duration: "8 mos",
    location: "Raanana, Center District, Israel",
    description: "Developing high-scale web applications for the Vodafone-Three (UK) merger integration, focusing on building scalable UI solutions.",
    responsibilities: [
      "UI Development: Crafting pixel-perfect, responsive interfaces using React, TypeScript, and Tailwind CSS.",
      "State Management: Architecting complex asynchronous flows with Redux and Redux-Saga.",
      "Efficiency: Developed flexible and reusable components that significantly reduced development time and ensured design consistency across the platform.",
      "Collaboration: Working closely with UI/UX designers, Product Owners (POs), backend teams, and system architects to define requirements and integrate frontend components with complex enterprise systems.",
      "Maintenance & Quality: Ensuring platform stability by identifying and resolving critical production bugs and performing ongoing code optimizations.",
      "Environment: Utilizing Bitbucket within an Agile development workflow."
    ]
  }
]

export function Experience() {
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
      id='experience'
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h2 className='text-2xl sm:text-3xl font-semibold text-center mb-12 drop-shadow-lg'>
        <span className="gradient-text">Work Experience</span>
      </h2>
      
      <div className='max-w-3xl mx-auto'>
        {experience.map((job, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="backdrop-blur-xl bg-black/70 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                    {job.title}
                  </h3>
                  <p className="text-lg text-purple-400 font-medium mt-1">
                    {job.company} · {job.type}
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                  <FaBriefcase className="text-purple-400" />
                  <span className="text-white/90 text-sm font-medium">{job.duration}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-4 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-purple-400" />
                  <span>{job.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-purple-400" />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/90 leading-relaxed mb-6">
              {job.description}
            </p>

            {/* Responsibilities */}
            <ul className="space-y-3">
              {job.responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
