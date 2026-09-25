import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, Github, MapPin } from 'lucide-react'
import { SECTION_IDS } from '@/lib/constants'

export function HeroSection() {
  const { t } = useTranslation()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative flex min-h-[92svh] items-center overflow-hidden border-b border-gray-900/10 px-6 pb-20 pt-32 dark:border-white/10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 mx-auto h-72 max-w-5xl bg-[radial-gradient(circle_at_center,rgba(49,94,251,0.16),transparent_68%)] dark:bg-[radial-gradient(circle_at_center,rgba(96,125,255,0.12),transparent_68%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-secondary-500" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gray-600 dark:text-gray-300">
              {t('hero.greeting')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-[clamp(4rem,10vw,8.5rem)] font-extrabold leading-[0.82] tracking-[-0.075em] text-gray-950 dark:text-white"
          >
            Ariana
            <span className="block text-primary-600 dark:text-primary-400">Peña.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-10 grid max-w-3xl gap-8 border-t border-gray-900/15 pt-7 sm:grid-cols-[1fr_auto] dark:border-white/15"
          >
            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
                {t('hero.tagline')}
              </p>
              <div className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                <MapPin className="h-3.5 w-3.5 text-secondary-500" aria-hidden="true" />
                {t('hero.location')}
              </div>
            </div>

            <div className="flex flex-wrap items-start gap-3 sm:flex-col">
              <button
                onClick={() => scrollTo(SECTION_IDS.projects)}
                className="group inline-flex min-w-44 items-center justify-between gap-4 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-gray-950"
              >
                {t('hero.cta_projects')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <a
                href="https://github.com/ariana0505"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-44 items-center justify-between gap-4 rounded-full border border-gray-900/25 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-primary-500 hover:text-primary-600 dark:border-white/25 dark:text-white dark:hover:border-primary-400 dark:hover:text-primary-400"
              >
                GitHub
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end"
        >
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[2rem] bg-primary-600 dark:bg-primary-500" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-2 border-gray-950 bg-accent dark:border-white">
            <div className="absolute -right-12 -top-10 h-48 w-48 rounded-full border-[32px] border-white/35" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,17,21,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,17,21,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="absolute inset-x-7 top-7 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray-950/65">
              <span>Web developer</span>
              <span>PE / 2026</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[9rem] font-extrabold leading-none tracking-[-0.12em] text-gray-950">AP</span>
            </div>
            <div className="absolute bottom-28 left-7 rotate-[-6deg] rounded-full bg-secondary-500 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
              Python · JS · TS
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-gray-950/85 p-4 text-white backdrop-blur-md">
              <span className="mb-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-300">
                <span className="h-2 w-2 rounded-full bg-[#8fff74]" />
                {t('hero.status_label')}
              </span>
              <span className="text-sm font-semibold">{t('hero.status')}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo(SECTION_IDS.about)}
        className="absolute bottom-7 left-6 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-gray-900 lg:flex dark:text-gray-400 dark:hover:text-white"
        aria-label="Scroll down"
      >
        Scroll
        <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </section>
  )
}
