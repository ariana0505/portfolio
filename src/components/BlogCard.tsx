import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { t as localize, formatDate } from '@/lib/utils'
import type { BlogPost } from '@/types'

interface BlogCardProps {
  post: BlogPost
  horizontal?: boolean
}

function getReadTime(content: string, lang: string): string {
  const words = content.split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return lang === 'es' ? `${minutes} min de lectura` : `${minutes} min read`
}

export function BlogCard({ post, horizontal = false }: BlogCardProps) {
  const { i18n, t } = useTranslation()
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en'
  const readTime = getReadTime(localize(post.content, lang), lang)

  return (
    <Card className={`overflow-hidden p-0 group ${horizontal ? 'md:flex md:flex-row' : ''}`}>
      {post.coverImage && (
        <Link to={`/blog/${post.slug}`} className={horizontal ? 'md:w-2/5 shrink-0' : ''}>
          <div className="relative overflow-hidden">
            <img
              src={post.coverImage}
              alt={localize(post.title, lang)}
              className={`w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 ${horizontal ? 'h-44 md:h-full' : 'h-52'}`}
              loading="lazy"
            />
            {/* Duotone overlay on hover */}
            <div className="absolute inset-0 bg-primary-500/30 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>
      )}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.date, lang)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {readTime}
            </span>
          </div>
          <Link to={`/blog/${post.slug}`}>
            <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {localize(post.title, lang)}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {localize(post.excerpt, lang)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 group/arrow"
          >
            {t('blog.read_more')}
            <motion.span
              className="inline-block"
              whileHover={{ x: [0, 4, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.span>
          </Link>
        </div>
      </div>
    </Card>
  )
}
