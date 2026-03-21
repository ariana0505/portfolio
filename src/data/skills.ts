import type { Skill } from '@/types'

export const skills: Skill[] = [
  { name: 'Python', category: 'Languages', level: 3 },
  { name: 'JavaScript', category: 'Languages', level: 3 },
  { name: 'TypeScript', category: 'Languages', level: 3 },
  { name: 'HTML', category: 'Web', level: 2 },
  { name: 'CSS', category: 'Web', level: 2 },
  { name: 'Astro', category: 'Web', level: 2 },
  { name: 'Node.js', category: 'Web', level: 2 },
  { name: 'Git', category: 'Tools', level: 2 },
  { name: 'GitHub', category: 'Tools', level: 2 },
  { name: 'VS Code', category: 'Tools', level: 1 },
  { name: 'Data Structures', category: 'Learning', level: 1 },
  { name: 'Algorithms', category: 'Learning', level: 1 },
]

export const skillCategories = [...new Set(skills.map((s) => s.category))]
