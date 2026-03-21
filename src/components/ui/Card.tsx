import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white p-6 shadow-sm border border-gray-200',
        'dark:bg-surface-dark-elevated dark:border-primary-800/30',
        hover && 'transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
