import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('text-center mb-12', className)}>
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-mono text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
    </div>
  )
}
