import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BlogCard } from '@/components/BlogCard'
import { AnimatedSection } from '@/components/AnimatedSection'
import { blogPosts } from '@/data/blog-posts'

export function BlogPage() {
  const { t } = useTranslation()

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Hero-like header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary-400/10 dark:bg-primary-600/5 blur-3xl rounded-full" />
          </div>
          <SectionHeading title={t('blog.all_posts')} subtitle={t('blog.subtitle')} />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={0.1 * (i % 3)}>
              <BlogCard post={post} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
