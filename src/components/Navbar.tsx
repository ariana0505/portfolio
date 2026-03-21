import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/constants'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useActiveSection } from '@/hooks/useActiveSection'
import { LanguageSwitcher } from './ui/LanguageSwitcher'
import { ThemeToggle } from './ui/ThemeToggle'

export function Navbar() {
  const { t } = useTranslation()
  const scrollY = useScrollPosition()
  const activeSection = useActiveSection()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = location.pathname === '/'
  const scrolled = scrollY > 50

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (!isHome) return
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl shadow-sm border-b border-gray-200/80 dark:border-primary-800/30'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-display text-xl font-extrabold bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent tracking-tight"
        >
          AP
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 relative">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = isHome && activeSection === sectionId
            const navHref = isHome ? item.href : `/${item.href}`
            return (
              <a
                key={item.labelKey}
                href={navHref}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }
                }}
                className={cn(
                  'relative text-sm font-medium transition-colors py-1',
                  isActive
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                )}
              >
                {t(item.labelKey)}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{
                      background: 'linear-gradient(to right, #0c87ea, #1fa7b3)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 hover:bg-primary-50 dark:hover:bg-primary-900/30 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-surface-dark/95 backdrop-blur-xl border-t border-gray-200 dark:border-primary-800/30"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {NAV_ITEMS.map((item) => {
                const navHref = isHome ? item.href : `/${item.href}`
                return (
                  <a
                    key={item.labelKey}
                    href={navHref}
                    onClick={(e) => {
                      if (isHome) {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }
                    }}
                    className="text-sm font-medium text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 py-2"
                  >
                    {t(item.labelKey)}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
