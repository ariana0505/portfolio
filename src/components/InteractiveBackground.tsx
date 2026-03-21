import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const blobs = [
  { color: 'bg-primary-300/20 dark:bg-primary-500/10', size: 'w-[400px] h-[400px]', x: '10%', y: '20%', duration: 20 },
  { color: 'bg-secondary-300/20 dark:bg-secondary-400/10', size: 'w-[350px] h-[350px]', x: '60%', y: '10%', duration: 25 },
  { color: 'bg-primary-200/25 dark:bg-primary-600/8', size: 'w-[300px] h-[300px]', x: '30%', y: '60%', duration: 18 },
  { color: 'bg-accent/15 dark:bg-accent/8', size: 'w-[250px] h-[250px]', x: '75%', y: '70%', duration: 22 },
]

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isPointerFine = useMediaQuery('(pointer: fine)')

  useEffect(() => {
    if (!isPointerFine || !containerRef.current) return

    const container = containerRef.current
    const handleMouseMove = (e: MouseEvent) => {
      container.style.setProperty('--mouse-x', `${e.clientX}px`)
      container.style.setProperty('--mouse-y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isPointerFine])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${blob.color} ${blob.size}`}
          style={{ left: blob.x, top: blob.y }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{
            duration: isPointerFine ? blob.duration : blob.duration * 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Dot grid with spotlight */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          color: 'var(--color-primary-300)',
          opacity: 0.12,
          maskImage: isPointerFine
            ? 'radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)'
            : 'none',
          WebkitMaskImage: isPointerFine
            ? 'radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)'
            : 'none',
        }}
      />

      {/* Noise overlay */}
      <div className="noise-overlay" />
    </div>
  )
}
