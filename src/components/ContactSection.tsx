import { useTranslation } from 'react-i18next'
import { ArrowUpRight, Github, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { SECTION_IDS } from '@/lib/constants'
import { AnimatedSection } from './AnimatedSection'

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id={SECTION_IDS.contact} className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="font-mono text-sm font-medium text-primary-500 dark:text-primary-400 tracking-wider">
              {'// '}{t('contact.title')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3 tracking-tight">
              {t('contact.subtitle')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              {t('contact.description')}
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-primary-200/70 bg-white p-8 shadow-xl shadow-primary-500/5 dark:border-primary-800/40 dark:bg-surface-dark-elevated md:p-12"
        >
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-secondary-300/20 blur-3xl dark:bg-secondary-500/10" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="max-w-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('contact.availability')}
              </p>
              <p className="mt-3 max-w-xl text-sm text-gray-500 dark:text-gray-400">
                {t('contact.github_note')}
              </p>
            </div>
            <a
              href="https://github.com/ariana0505"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              {t('contact.github_cta')}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
