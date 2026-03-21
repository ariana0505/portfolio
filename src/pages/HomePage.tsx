import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { SkillsCloud } from '@/components/SkillsCloud'
import { ProjectsSection } from '@/components/ProjectsSection'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { ContactSection } from '@/components/ContactSection'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Badge } from '@/components/ui/Badge'
import { SECTION_IDS } from '@/lib/constants'
import { blogPosts } from '@/data/blog-posts'
import { t as localize, formatDate } from '@/lib/utils'

function BlogPreview() {
  const { i18n, t } = useTranslation()
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en'
  const [featured, ...rest] = blogPosts

  const getReadTime = (content: string) => {
    const words = content.split(/\s+/).length
    const minutes = Math.max(1, Math.round(words / 200))
    return lang === 'es' ? `${minutes} min` : `${minutes} min`
  }

  return (
    <section id={SECTION_IDS.blog} className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-mono text-sm font-medium text-primary-500 dark:text-primary-400 tracking-wider">
                {'// '}Blog
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 tracking-tight">
                {t('blog.subtitle')}
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden md:flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:gap-2.5 transition-all"
            >
              {t('blog.view_all')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Featured post large + others small */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to={`/blog/${featured.slug}`} className="group block h-full">
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-surface-dark-elevated border border-gray-200 dark:border-primary-800/30 h-full hover:shadow-lg hover:shadow-primary-500/5 transition-all">
                {featured.coverImage && (
                  <div className="relative overflow-hidden">
                    <img
                      src={featured.coverImage}
                      alt={localize(featured.title, lang)}
                      className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{formatDate(featured.date, lang)}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{getReadTime(localize(featured.content, lang))}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {localize(featured.title, lang)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                    {localize(featured.excerpt, lang)}
                  </p>
                  <div className="flex gap-1.5 mt-4">
                    {featured.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Other posts */}
          <div className="flex flex-col gap-4">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              >
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="flex gap-4 rounded-2xl bg-white dark:bg-surface-dark-elevated border border-gray-200 dark:border-primary-800/30 p-4 hover:shadow-md hover:shadow-primary-500/5 transition-all">
                    {post.coverImage && (
                      <img
                        src={post.coverImage}
                        alt={localize(post.title, lang)}
                        className="w-24 h-24 rounded-xl object-cover shrink-0"
                        loading="lazy"
                      />
                    )}
                    <div className="flex flex-col justify-center min-w-0">
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <span>{formatDate(post.date, lang)}</span>
                        <span>&middot;</span>
                        <span>{getReadTime(localize(post.content, lang))}</span>
                      </div>
                      <h4 className="font-display font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                        {localize(post.title, lang)}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                        {localize(post.excerpt, lang)}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400"
          >
            {t('blog.view_all')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsCloud />
      <ProjectsSection />
      <ExperienceTimeline />
      <BlogPreview />
      <ContactSection />
    </>
  )
}
