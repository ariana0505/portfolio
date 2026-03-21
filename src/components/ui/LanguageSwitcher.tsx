import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language?.startsWith('es') ? 'es' : 'en'

  const toggle = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'es' : 'en')
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-medium transition-colors hover:bg-primary-50 dark:hover:bg-primary-900/30 cursor-pointer"
      aria-label="Switch language"
    >
      <span className={cn(currentLang === 'en' ? 'text-primary-600 dark:text-primary-300' : 'text-gray-400 dark:text-gray-500')}>
        EN
      </span>
      <span className="text-gray-300 dark:text-gray-600">/</span>
      <span className={cn(currentLang === 'es' ? 'text-primary-600 dark:text-primary-300' : 'text-gray-400 dark:text-gray-500')}>
        ES
      </span>
    </button>
  )
}
