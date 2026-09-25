import { useTranslation } from 'react-i18next'
import { ArrowUpRight, Github, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { SECTION_IDS } from '@/lib/constants'
import { AnimatedSection } from './AnimatedSection'

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id={SECTION_IDS.contact} className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="mb-12 text-left">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary-600 dark:text-primary-400">
              05 / {t('contact.title')}
            </span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-gray-950 dark:text-white md:text-6xl">
              {t('contact.subtitle')}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-gray-500 dark:text-gray-400">
              {t('contact.description')}
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-[2rem] bg-primary-600 p-8 text-white shadow-[12px_12px_0_#ef5b3f] dark:bg-primary-700 md:p-12"
        >
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border-[36px] border-white/10" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-600">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-white">
                {t('contact.availability')}
              </p>
              <p className="mt-3 max-w-xl text-sm text-white/65">
                {t('contact.github_note')}
              </p>
            </div>
            <a
              href="https://github.com/ariana0505"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 transition-transform hover:-translate-y-0.5"
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
