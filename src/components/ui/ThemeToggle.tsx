import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded-lg p-2 transition-colors hover:bg-primary-50 dark:hover:bg-primary-900/30 cursor-pointer"
      aria-label="Toggle theme"
    >
      {dark ? (
        <Sun className="h-5 w-5 text-primary-300" />
      ) : (
        <Moon className="h-5 w-5 text-primary-600" />
      )}
    </button>
  )
}
