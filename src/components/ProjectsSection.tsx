import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import { SECTION_IDS } from '@/lib/constants'
import { AnimatedSection } from './AnimatedSection'
import { projects } from '@/data/projects'
import { t as localize } from '@/lib/utils'

export function ProjectsSection() {
  const { i18n, t } = useTranslation()
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en'

  return (
    <section id={SECTION_IDS.projects} className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-mono text-sm font-medium text-primary-500 dark:text-primary-400 tracking-wider">
                {'// '}{t('projects.title')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 tracking-tight">
                {t('projects.subtitle')}
              </h2>
            </div>
            <a
              href="https://github.com/ariana0505"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:gap-2.5 transition-all"
            >
              {t('projects.view_all_github')}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </AnimatedSection>

        {/* Project cards - large showcase style */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group rounded-2xl bg-white dark:bg-surface-dark-elevated border border-gray-200 dark:border-primary-800/30 overflow-hidden hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className={`relative overflow-hidden ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={localize(project.title, lang)}
                      className="w-full h-56 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                    {project.featured && (
                      <div className="absolute top-4 left-4 rounded-full bg-primary-500/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1">
                        {t('projects.featured')}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`p-8 flex flex-col justify-center ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {localize(project.title, lang)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                      {localize(project.description, lang)}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          {t('projects.view_code')}
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {t('projects.view_live')}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile "View all on GitHub" */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="https://github.com/ariana0505"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400"
          >
            {t('projects.view_all_github')}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
