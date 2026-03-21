import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  as?: 'button' | 'a'
  href?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40',
  secondary:
    'bg-secondary-500 text-white hover:bg-secondary-600 shadow-lg shadow-secondary-500/25',
  outline:
    'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 dark:text-primary-300 dark:hover:bg-primary-900/30',
  ghost:
    'text-primary-600 hover:bg-primary-50 dark:text-primary-300 dark:hover:bg-primary-900/30',
}

export function Button({
  variant = 'primary',
  className,
  as = 'button',
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 cursor-pointer text-sm',
    variants[variant],
    className
  )

  if (as === 'a' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
