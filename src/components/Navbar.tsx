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
        'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-gray-900/10 bg-surface/90 backdrop-blur-xl dark:border-white/10 dark:bg-surface-dark/90'
          : 'border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 font-display text-sm font-extrabold tracking-tight text-white dark:bg-white dark:text-gray-950"
          aria-label="Ariana Peña"
        >
          AP
        </Link>

        {/* Desktop nav */}
        <div className="relative hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = isHome && activeSection === sectionId
            const navHref = isHome ? item.href : `/${item.href}`
            return (
              <Link
                key={item.labelKey}
                to={navHref}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }
                }}
                className={cn(
                  'relative py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors',
                  isActive
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                )}
              >
                {t(item.labelKey)}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-secondary-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
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
            className="cursor-pointer rounded-full border border-gray-900/15 p-2 hover:border-primary-500 dark:border-white/15"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
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
            id="mobile-navigation"
            className="overflow-hidden border-t border-gray-900/10 bg-surface/95 backdrop-blur-xl dark:border-white/10 dark:bg-surface-dark/95 md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {NAV_ITEMS.map((item) => {
                const navHref = isHome ? item.href : `/${item.href}`
                return (
                  <Link
                    key={item.labelKey}
                    to={navHref}
                    onClick={(e) => {
                      if (isHome) {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }
                    }}
                    className="py-2 font-mono text-xs font-semibold uppercase tracking-wider text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                  >
                    {t(item.labelKey)}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
