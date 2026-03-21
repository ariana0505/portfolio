export interface LocalizedString {
  en: string
  es: string
}

export interface Project {
  slug: string
  title: LocalizedString
  description: LocalizedString
  image: string
  tags: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export interface BlogPost {
  slug: string
  title: LocalizedString
  excerpt: LocalizedString
  content: LocalizedString
  date: string
  tags: string[]
  coverImage?: string
}

export interface Experience {
  company: string
  role: LocalizedString
  period: string
  description: LocalizedString
  highlights: LocalizedString[]
}

export interface Skill {
  name: string
  icon?: string
  category: string
  level: 1 | 2 | 3
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
