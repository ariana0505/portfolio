import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { SECTION_IDS } from '@/lib/constants'
import { AnimatedSection } from './AnimatedSection'
import { ProjectVisual } from './ProjectVisual'
import { projects } from '@/data/projects'
import { t as localize } from '@/lib/utils'

export function ProjectsSection() {
  const { i18n, t } = useTranslation()
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en'

  return (
    <section id={SECTION_IDS.projects} className="bg-[#111318] px-6 py-28 text-white dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="mb-16 grid items-end gap-8 border-b border-white/15 pb-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-secondary-400">
                02 / {t('projects.title')}
              </span>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.04em] md:text-6xl">
                {t('projects.subtitle')}
              </h2>
            </div>
            <a
              href="https://github.com/ariana0505"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold transition-colors hover:border-white hover:bg-white hover:text-black md:flex"
            >
              {t('projects.view_all_github')}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </AnimatedSection>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-[2rem] border border-white/15 bg-[#191c22]"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <ProjectVisual slug={project.slug} title={localize(project.title, lang)} />
                </div>

                <div className={`flex flex-col justify-between p-8 md:p-10 lg:p-12 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <span className="font-mono text-xs text-white/45">0{i + 1}</span>
                      {project.featured && (
                        <span className="rounded-full border border-secondary-400/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary-300">
                          {t('projects.featured')}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                      {localize(project.title, lang)}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-white/65">
                      {localize(project.description, lang)}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[11px] text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/10 pt-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
                      >
                        {t('projects.view_live')}
                        <ArrowUpRight className="h-4 w-4 text-secondary-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                      >
                        <Github className="h-4 w-4" />
                        {t('projects.view_code')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <a
            href="https://github.com/ariana0505"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold"
          >
            {t('projects.view_all_github')}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
