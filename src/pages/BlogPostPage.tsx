import { useRef } from 'react'
import { useParams, Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { t as localize, formatDate } from '@/lib/utils'
import { blogPosts } from '@/data/blog-posts'

function getReadTime(content: string, lang: string): string {
  const words = content.split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return lang === 'es' ? `${minutes} min de lectura` : `${minutes} min read`
}

export function BlogPostPage() {
  const { slug } = useParams()
  const { i18n, t } = useTranslation()
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en'
  const articleRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ['start start', 'end end'],
  })

  const coverY = useTransform(scrollYProgress, [0, 0.3], [0, -40])

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="pt-28 pb-20 px-6 text-center">
        <p className="text-gray-500">Post not found</p>
        <Link to="/blog" className="text-primary-500 hover:underline mt-4 inline-block">
          {t('blog.back')}
        </Link>
      </div>
    )
  }

  const content = localize(post.content, lang)
  const readTime = getReadTime(content, lang)

  return (
    <>
      {/* Article reading progress */}
      <motion.div
        className="fixed top-[3px] left-0 right-0 h-[2px] z-[52] origin-left bg-secondary-400"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-28 pb-20 px-6"
      >
        <article ref={articleRef} className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('blog.back')}
          </Link>

          {post.coverImage && (
            <motion.div className="overflow-hidden rounded-2xl mb-8" style={{ y: coverY }}>
              <img
                src={post.coverImage}
                alt={localize(post.title, lang)}
                className="w-full h-64 md:h-80 object-cover"
              />
            </motion.div>
          )}

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date, lang)}
            </div>
            <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4" />
              {readTime}
            </div>
            <div className="flex gap-1.5">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {localize(post.title, lang)}
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-code:bg-primary-50 prose-code:dark:bg-primary-900/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-blockquote:border-l-primary-500 prose-blockquote:bg-primary-50/50 prose-blockquote:dark:bg-primary-900/10 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg">
            {content.split('\n').map((paragraph, i) => {
              if (paragraph.startsWith('### ')) {
                return <h3 key={i}>{paragraph.replace('### ', '')}</h3>
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={i}>{paragraph.replace('## ', '')}</h2>
              }
              if (paragraph.startsWith('```')) {
                return null
              }
              if (paragraph.trim() === '') {
                return null
              }
              return <p key={i}>{paragraph}</p>
            })}
          </div>
        </article>
      </motion.div>
    </>
  )
}
