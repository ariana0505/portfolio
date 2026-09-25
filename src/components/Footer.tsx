import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { Heart, Github } from 'lucide-react'
import { socialLinks } from '@/data/social-links'
import { NAV_ITEMS } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
}

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative z-10 border-t border-gray-900/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + tagline */}
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 font-display text-sm font-extrabold text-white dark:bg-white dark:text-gray-950">
              AP
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              {t('footer.quick_links')}
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.labelKey}
                  to={`/${item.href}`}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {t(item.labelKey)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              {t('footer.connect')}
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-900/15 text-gray-600 transition-colors hover:border-gray-950 hover:bg-gray-950 hover:text-white dark:border-white/15 dark:text-gray-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-gray-950"
                    aria-label={link.name}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-primary-800/20">
          <p className="flex items-center justify-center gap-1 text-center font-mono text-xs text-gray-500 dark:text-gray-400">
            {t('footer.made_with')}{' '}
            <Heart className="h-4 w-4 text-secondary-500 fill-secondary-500" /> &copy;{' '}
            {new Date().getFullYear()}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
