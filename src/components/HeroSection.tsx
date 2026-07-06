import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Mail } from 'lucide-react'
import { SECTION_IDS } from '@/lib/constants'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const shapes = [
  { type: 'circle' as const, size: 50, x: '8%', y: '12%', depth: 0.03, duration: 18 },
  { type: 'triangle' as const, size: 35, x: '88%', y: '18%', depth: 0.02, duration: 22 },
  { type: 'square' as const, size: 28, x: '78%', y: '72%', depth: 0.01, duration: 25 },
  { type: 'circle' as const, size: 20, x: '18%', y: '78%', depth: 0.02, duration: 20 },
  { type: 'triangle' as const, size: 40, x: '52%', y: '8%', depth: 0.03, duration: 15 },
  { type: 'circle' as const, size: 30, x: '68%', y: '48%', depth: 0.02, duration: 19 },
]

function Shape({ type, size, offsetX, offsetY, duration }: {
  type: 'circle' | 'triangle' | 'square'; size: number
  offsetX: number; offsetY: number; duration: number
}) {
  const el = type === 'circle' ? (
    <div className="rounded-full border border-primary-400/20 bg-primary-400/5" style={{ width: size, height: size }} />
  ) : type === 'triangle' ? (
    <div style={{ width: 0, height: 0, borderLeft: `${size/2}px solid transparent`, borderRight: `${size/2}px solid transparent`, borderBottom: `${size}px solid rgba(31,167,179,0.12)` }} />
  ) : (
    <div className="rotate-45 border border-secondary-400/15 bg-secondary-400/5" style={{ width: size, height: size }} />
  )

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ x: offsetX, y: offsetY }}
      animate={{ y: [offsetY, offsetY - 15, offsetY + 8, offsetY] }}
      transition={{ duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    >
      {el}
    </motion.div>
  )
}

export function HeroSection() {
  const { t } = useTranslation()
  const { x: mouseX, y: mouseY } = useMousePosition()
  const isDesktop = useMediaQuery('(pointer: fine)')

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const cx = typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  const cy = typeof window !== 'undefined' ? window.innerHeight / 2 : 0

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {(isDesktop ? shapes : shapes.slice(0, 3)).map((s, i) => (
          <div key={i} style={{ position: 'absolute', left: s.x, top: s.y }}>
            <Shape
              type={s.type}
              size={isDesktop ? s.size : s.size * 0.6}
              offsetX={isDesktop ? (mouseX - cx) * s.depth : 0}
              offsetY={isDesktop ? (mouseY - cy) * s.depth : 0}
              duration={s.duration}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 w-full">
        <div className="grid gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="font-mono text-sm font-medium text-primary-500 dark:text-primary-400 tracking-wider">
                {'// '}{t('hero.greeting')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl lg:text-8xl font-extrabold mb-4 tracking-tight"
            >
              <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-accent bg-clip-text text-transparent">
                {t('hero.name')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-base text-gray-500 dark:text-gray-400 mb-8 max-w-md leading-relaxed"
            >
              {t('hero.tagline')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/ariana0505"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-gray-900 dark:bg-white px-5 py-3 text-sm font-medium text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <button
                onClick={() => scrollTo(SECTION_IDS.contact)}
                className="flex items-center gap-2 rounded-xl border border-primary-300 dark:border-primary-700 px-5 py-3 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                {t('hero.cta_contact')}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button onClick={() => scrollTo(SECTION_IDS.about)} className="cursor-pointer" aria-label="Scroll down">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ArrowDown className="h-5 w-5 text-gray-400" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
