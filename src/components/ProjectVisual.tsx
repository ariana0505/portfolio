import { BookOpen, Braces, Gamepad2, PanelsTopLeft } from 'lucide-react'

interface ProjectVisualProps {
  slug: string
  title: string
}

const visualConfig = {
  bibliomatch: {
    icon: BookOpen,
    shell: 'bg-[#f5b942]',
    panel: 'bg-[#fff8df]',
    accent: 'bg-[#17233d]',
    label: 'Library system',
  },
  'leetcode75-python': {
    icon: Braces,
    shell: 'bg-[#5d6bff]',
    panel: 'bg-[#eef0ff]',
    accent: 'bg-[#b7ff8a]',
    label: '75 / 75',
  },
  portfolio: {
    icon: PanelsTopLeft,
    shell: 'bg-[#ff7557]',
    panel: 'bg-[#fff1ed]',
    accent: 'bg-[#222222]',
    label: 'React + TypeScript',
  },
  'pokemon-static-site': {
    icon: Gamepad2,
    shell: 'bg-[#62cbbf]',
    panel: 'bg-[#e9fffb]',
    accent: 'bg-[#ef5350]',
    label: 'Astro static site',
  },
} as const

export function ProjectVisual({ slug, title }: ProjectVisualProps) {
  const config = visualConfig[slug as keyof typeof visualConfig] ?? visualConfig.portfolio
  const Icon = config.icon

  return (
    <div className={`relative flex min-h-72 items-center justify-center overflow-hidden p-7 md:min-h-[360px] ${config.shell}`} aria-hidden="true">
      <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full border-[28px] border-white/20" />
      <div className="absolute -bottom-16 -right-12 h-52 w-52 rotate-12 rounded-[2.5rem] bg-black/10" />

      <div className={`relative w-full max-w-md overflow-hidden rounded-2xl border-2 border-black/80 shadow-[10px_10px_0_rgba(0,0,0,0.82)] ${config.panel}`}>
        <div className="flex items-center justify-between border-b-2 border-black/80 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-black/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          </div>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-black/55">{config.label}</span>
        </div>

        <div className="p-5 text-black">
          <div className={`mb-7 flex h-12 w-12 items-center justify-center rounded-xl text-white ${config.accent}`}>
            <Icon className="h-6 w-6" />
          </div>
          <p className="font-display text-2xl font-extrabold tracking-tight">{title}</p>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <span className={`col-span-2 h-2 rounded-full ${config.accent}`} />
            <span className="h-2 rounded-full bg-black/15" />
            <span className="h-2 rounded-full bg-black/15" />
            <span className="col-span-2 h-2 rounded-full bg-black/10" />
          </div>
          <div className="mt-7 flex gap-2">
            <span className="h-8 w-24 rounded-full bg-black/85" />
            <span className="h-8 w-20 rounded-full border-2 border-black/30" />
          </div>
        </div>
      </div>
    </div>
  )
}
