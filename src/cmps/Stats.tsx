import { useEffect, useRef, useState } from "react"
import { animate, motion, useInView } from "framer-motion"

type Stat = {
  value: number
  suffix?: string
  label: string
}

const stats: Stat[] = [
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 12, suffix: "", label: "Technologies" },
  { value: 7, suffix: "", label: "Certifications" },
  { value: 3, suffix: "+", label: "Featured Projects" },
]

function Counter({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => setValue(Math.floor(latest)),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export function Stats() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.section
      className="align-elemets py-10"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.03 }}
            className="backdrop-blur-xl bg-black/60 border border-white/20 rounded-2xl p-6 text-center shadow-xl"
          >
            <div className="text-3xl sm:text-4xl font-bold drop-shadow-lg">
              <span className="gradient-text">
                <Counter to={stat.value} suffix={stat.suffix} />
              </span>
            </div>
            <p className="mt-2 text-sm text-white/70 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
