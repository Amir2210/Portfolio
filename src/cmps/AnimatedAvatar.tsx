import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MouseEvent } from 'react'
import avatar from '../assets/imgs/avatar.png'

interface Props {
  className?: string
  imageClassName?: string
  depth?: number
}

export function AnimatedAvatar({ className = "w-48 sm:w-64 lg:w-72", imageClassName = "", depth = 50 }: Props) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth out the mouse movements
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  // Transform coordinates into degrees (max 25deg rotation)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    // calculate mouse position relative to center of the element (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d"
      }}
      className={`relative flex items-center justify-center cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // Add a subtle continuous floating animation
      animate={{ y: [0, -15, 0] }}
      transition={{ 
        y: { repeat: Infinity, duration: 6, ease: "easeInOut" } 
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="w-full h-full relative"
      >
        {/* Glow / Shadow Layer pushed back in 3D space */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-purple-500/50 to-cyan-500/50 rounded-full blur-3xl transform-gpu" 
          style={{ transform: `translateZ(-${depth}px)` }}
        ></div>
        
        {/* Actual Image pulled forward in 3D space */}
        <img 
          src={avatar} 
          alt="avatar" 
          className={`relative w-full h-full object-cover rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/20 will-change-transform ${imageClassName}`}
          style={{ transform: `translateZ(${depth}px)` }} 
        />
      </motion.div>
    </motion.div>
  )
}
