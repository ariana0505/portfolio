import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const floatingShapes = [
  { type: 'circle', size: 40, x: '15%', y: '25%', duration: 15 },
  { type: 'square', size: 25, x: '80%', y: '20%', duration: 20 },
  { type: 'circle', size: 20, x: '70%', y: '70%', duration: 18 },
  { type: 'square', size: 30, x: '25%', y: '65%', duration: 22 },
]

export function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Floating shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: shape.x, top: shape.y }}
          animate={{
            y: [0, -15, 10, 0],
            rotate: shape.type === 'square' ? [45, 135, 45] : [0, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <div
            className={`${shape.type === 'circle' ? 'rounded-full' : 'rotate-45'} bg-primary-400/10 border border-primary-400/20`}
            style={{ width: shape.size, height: shape.size }}
          />
        </motion.div>
      ))}

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="font-display text-8xl font-bold bg-gradient-to-r from-primary-500 via-secondary-400 to-accent bg-clip-text text-transparent mb-4"
          animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ backgroundSize: '200%' }}
        >
          404
        </motion.h1>
        <h2 className="font-display text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          {t('not_found.title')}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
          {t('not_found.message')}
        </p>
        <Link to="/">
          <Button>
            <Home className="h-4 w-4" />
            {t('not_found.back_home')}
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
