import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

type RotatingTextProps = {
  words: string[]
  interval?: number
  className?: string
}

export function RotatingText({ words, interval = 2200, className }: RotatingTextProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className={`inline-flex overflow-hidden align-bottom ${className ?? ""}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="gradient-text"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
