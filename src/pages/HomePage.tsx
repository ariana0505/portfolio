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
    <section id={SECTION_IDS.blog} className="border-t border-gray-900/10 px-6 py-28 dark:border-white/10">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="mb-14 flex items-end justify-between">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary-600 dark:text-primary-400">
                04 / Blog
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] text-gray-950 dark:text-white md:text-6xl">
                {t('blog.subtitle')}
              </h2>
            </div>
            <Link
              to="/blog"
              className="group hidden items-center gap-2 rounded-full border border-gray-900/20 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-900 dark:border-white/20 dark:text-white dark:hover:border-white md:flex"
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
              <div className="h-full overflow-hidden rounded-[2rem] border border-gray-900/15 bg-white/65 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/15 dark:bg-white/5">
                {featured.coverImage && (
                  <div className="relative overflow-hidden">
                    <img
                      src={featured.coverImage}
                      alt={localize(featured.title, lang)}
                      className="h-64 w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}
                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{formatDate(featured.date, lang)}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{getReadTime(localize(featured.content, lang))}</span>
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-bold tracking-tight text-gray-950 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                    {localize(featured.title, lang)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                    {localize(featured.excerpt, lang)}
                  </p>
                  <div className="mt-5 flex gap-1.5">
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
                  <div className="flex gap-5 rounded-2xl border border-gray-900/15 bg-white/65 p-5 transition-all hover:border-primary-400 dark:border-white/15 dark:bg-white/5">
                    {post.coverImage && (
                      <img
                        src={post.coverImage}
                        alt={localize(post.title, lang)}
                        className="h-24 w-24 shrink-0 rounded-xl object-cover grayscale transition group-hover:grayscale-0"
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
