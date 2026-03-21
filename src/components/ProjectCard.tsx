import { useTranslation } from 'react-i18next'
import { ExternalLink, Github, Star } from 'lucide-react'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { t as localize } from '@/lib/utils'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { i18n, t } = useTranslation()
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en'

  return (
    <Card className="overflow-hidden p-0 group relative">
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px] scale-[1.02]" />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1 rounded-full bg-primary-500/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1">
          <Star className="h-3 w-3 fill-current" />
          {t('projects.featured')}
        </div>
      )}

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={localize(project.title, lang)}
          className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-[2px]"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
          <h4 className="text-white font-display text-xl font-bold text-center px-4">
            {localize(project.title, lang)}
          </h4>
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/20 backdrop-blur-sm p-2.5 text-white hover:bg-white/30 transition-colors"
                aria-label={t('projects.view_live')}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/20 backdrop-blur-sm p-2.5 text-white hover:bg-white/30 transition-colors"
                aria-label={t('projects.view_code')}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {localize(project.title, lang)}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {localize(project.description, lang)}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}
