import { motion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[51] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(to right, #0c87ea, #1fa7b3)',
        boxShadow: '0 0 10px rgba(31, 167, 179, 0.5)',
      }}
    />
  )
}
