export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  experience: 'experience',
  blog: 'blog',
  contact: 'contact',
} as const

export const NAV_ITEMS = [
  { labelKey: 'nav.about', href: `#${SECTION_IDS.about}` },
  { labelKey: 'nav.projects', href: `#${SECTION_IDS.projects}` },
  { labelKey: 'nav.experience', href: `#${SECTION_IDS.experience}` },
  { labelKey: 'nav.blog', href: `#${SECTION_IDS.blog}` },
  { labelKey: 'nav.contact', href: `#${SECTION_IDS.contact}` },
] as const
