import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SECTION_IDS } from '@/lib/constants'
import { AnimatedSection } from './AnimatedSection'
import { experiences } from '@/data/experience'
import { t as localize } from '@/lib/utils'
import { Check } from 'lucide-react'

export function ExperienceTimeline() {
  const { i18n, t } = useTranslation()
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en'

  return (
    <section id={SECTION_IDS.experience} className="py-24 px-6 bg-gray-50 dark:bg-surface-dark-elevated/20">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="font-mono text-sm font-medium text-primary-500 dark:text-primary-400 tracking-wider">
              {'// '}{t('experience.title')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 tracking-tight">
              {t('experience.subtitle')}
            </h2>
          </div>
        </AnimatedSection>

        {/* Journey steps - horizontal on desktop, vertical on mobile */}
        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-400 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <span className="font-mono text-xs font-medium text-primary-500 dark:text-primary-400 tracking-wider">
                  {exp.period}
                </span>
                {/* Connecting line (desktop only) */}
                {i < experiences.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-primary-300 to-transparent dark:from-primary-700" />
                )}
              </div>

              <div className="rounded-2xl bg-white dark:bg-surface-dark-elevated border border-gray-200 dark:border-primary-800/30 p-6 h-full">
                <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {localize(exp.role, lang)}
                </h3>
                <p className="text-sm font-medium text-secondary-500 mb-3">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {localize(exp.description, lang)}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Check className="h-3.5 w-3.5 text-secondary-400 mt-0.5 shrink-0" />
                      <span>{localize(h, lang)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
