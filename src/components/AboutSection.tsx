import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SECTION_IDS } from '@/lib/constants'
import { AnimatedSection } from './AnimatedSection'

const stats = [
  { value: '75/75', key: 'leetcode_label' },
  { value: '19', key: 'repos_label' },
  { value: '3', key: 'languages_label' },
] as const

export function AboutSection() {
  const { t } = useTranslation()
  const focusItems = ['secure_apps', 'testing', 'data_structures', 'system_design'] as const

  return (
    <section id={SECTION_IDS.about} className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <AnimatedSection>
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary-600 dark:text-primary-400">
                01 / {t('about.title')}
              </span>
              <h2 className="mt-4 max-w-sm font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-gray-950 dark:text-white md:text-6xl">
                {t('about.subtitle')}
              </h2>
            </div>
          </AnimatedSection>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-300 md:text-2xl"
            >
              {t('about.bio')}
            </motion.p>

            <div className="mt-12 grid border-y border-gray-900/15 sm:grid-cols-3 dark:border-white/15">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="border-b border-gray-900/15 py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0 dark:border-white/15"
                >
                  <strong className="block font-display text-4xl font-extrabold tracking-tight text-gray-950 dark:text-white">{stat.value}</strong>
                  <span className="mt-1 block text-sm text-gray-500 dark:text-gray-400">{t(`about.stats.${stat.key}`)}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-[180px_1fr]">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                {t('about.currently_learning')}
              </span>
              <div className="flex flex-wrap gap-2.5">
                {focusItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-900/20 bg-white/60 px-4 py-2 text-sm font-medium text-gray-800 dark:border-white/20 dark:bg-white/5 dark:text-gray-200"
                  >
                    {t(`about.focus.${item}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
