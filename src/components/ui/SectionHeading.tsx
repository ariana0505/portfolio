import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-14 border-b border-gray-900/15 pb-8 text-left dark:border-white/15', className)}>
      <h2 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-gray-950 dark:text-white md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-primary-600 dark:text-primary-400">{subtitle}</p>
      )}
    </div>
  )
}
