import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SECTION_IDS } from '@/lib/constants'
import { AnimatedSection } from './AnimatedSection'
import { experiences } from '@/data/experience'
import { t as localize } from '@/lib/utils'

export function ExperienceTimeline() {
  const { i18n, t } = useTranslation()
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en'

  return (
    <section id={SECTION_IDS.experience} className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="mb-14 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary-600 dark:text-primary-400">
              03 / {t('experience.title')}
            </span>
            <h2 className="font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-gray-950 dark:text-white md:text-6xl">
              {t('experience.subtitle')}
            </h2>
          </div>
        </AnimatedSection>

        <div className="border-t border-gray-900/15 dark:border-white/15">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 border-b border-gray-900/15 py-10 md:grid-cols-[0.2fr_0.55fr_1.25fr] dark:border-white/15"
            >
              <span className="font-mono text-xs text-gray-400">0{i + 1}</span>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-primary-600 dark:text-primary-400">{exp.period}</span>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
                  {localize(exp.role, lang)}
                </h3>
                <p className="mt-1 text-sm font-semibold text-secondary-600 dark:text-secondary-400">{exp.company}</p>
              </div>
              <div>
                <p className="max-w-2xl leading-relaxed text-gray-600 dark:text-gray-300">
                  {localize(exp.description, lang)}
                </p>
                <ul className="mt-5 grid gap-3">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-secondary-500" aria-hidden="true" />
                      {localize(highlight, lang)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
