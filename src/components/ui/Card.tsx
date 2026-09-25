import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[1.5rem] border border-gray-900/15 bg-white/65 p-6',
        'dark:border-white/15 dark:bg-white/5',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 hover:shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
