import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { Code2, BookOpen, Coffee, Zap } from 'lucide-react'
import { SECTION_IDS } from '@/lib/constants'
import { AnimatedSection } from './AnimatedSection'

function StatCard({ value, label, icon: Icon, delay }: {
  value: number; label: string; icon: React.ComponentType<{ className?: string }>; delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl bg-white dark:bg-surface-dark-elevated p-5 border border-gray-200 dark:border-primary-800/30"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary-600 dark:text-primary-400" />
        </div>
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          {isInView ? value : 0}+
        </span>
      </div>
      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
    </motion.div>
  )
}

function BentoCard({ children, className = '', delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl bg-white dark:bg-surface-dark-elevated border border-gray-200 dark:border-primary-800/30 p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id={SECTION_IDS.about} className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section label - left aligned, not centered */}
        <AnimatedSection>
          <div className="mb-12">
            <span className="font-mono text-sm font-medium text-primary-500 dark:text-primary-400 tracking-wider">
              {'// '}{t('about.title')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 tracking-tight">
              {t('about.subtitle')}
            </h2>
          </div>
        </AnimatedSection>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Bio - spans 2 columns */}
          <BentoCard className="md:col-span-2" delay={0.1}>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {t('about.bio')}
            </p>
          </BentoCard>

          {/* Currently learning */}
          <BentoCard delay={0.2}>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-secondary-500" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {t('about.currently_learning')}
              </span>
            </div>
            <ul className="space-y-2">
              {['React + TypeScript', 'Node.js APIs', 'Data Structures', 'System Design'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-400" />
                  {item}
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* Stats row */}
          <StatCard value={38} label={t('about.stats.leetcode_label')} icon={Code2} delay={0.15} />
          <StatCard value={13} label={t('about.stats.repos_label')} icon={Zap} delay={0.2} />
          <StatCard value={3} label={t('about.stats.languages_label')} icon={Coffee} delay={0.25} />
        </div>
      </div>
    </section>
  )
}
