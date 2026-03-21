import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { t as localize } from '@/lib/utils'
import type { Experience } from '@/types'

interface ExperienceItemProps {
  experience: Experience
  index: number
}

export function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en'
  const isLeft = index % 2 === 0

  return (
    <motion.div
      className={`flex gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div className="rounded-lg bg-white dark:bg-surface-dark-elevated p-6 shadow-sm border-l-4 border-l-transparent"
          style={{ borderImage: 'linear-gradient(to bottom, #0c87ea, #1fa7b3) 1' }}
        >
          <span className="text-sm text-primary-500 font-medium">{experience.period}</span>
          <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mt-1">
            {localize(experience.role, lang)}
          </h3>
          <p className="text-secondary-500 font-medium text-sm">{experience.company}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
            {localize(experience.description, lang)}
          </p>
          <ul className={`mt-3 space-y-1.5 ${isLeft ? 'md:text-right' : ''}`}>
            {experience.highlights.map((h, i) => (
              <li key={i} className={`flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                <Check className="h-3.5 w-3.5 text-secondary-400 mt-0.5 shrink-0" />
                <span>{localize(h, lang)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          className="relative"
          whileInView={{ scale: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-400" />
          {/* Sonar ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary-400/50"
            initial={{ scale: 1, opacity: 0.6 }}
            whileInView={{
              scale: [1, 2.5],
              opacity: [0.6, 0],
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Spacer for alignment */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  )
}
