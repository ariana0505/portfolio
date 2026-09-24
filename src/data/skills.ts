import type { Skill } from '@/types'

export const skills: Skill[] = [
  { name: 'Python', category: 'Languages', level: 3 },
  { name: 'JavaScript', category: 'Languages', level: 3 },
  { name: 'TypeScript', category: 'Languages', level: 2 },
  { name: 'React', category: 'Web', level: 2 },
  { name: 'Flask', category: 'Web', level: 2 },
  { name: 'Astro', category: 'Web', level: 2 },
  { name: 'Node.js', category: 'Web', level: 2 },
  { name: 'Tailwind CSS', category: 'Web', level: 2 },
  { name: 'MongoDB', category: 'Data', level: 2 },
  { name: 'REST APIs', category: 'Data', level: 2 },
  { name: 'Data Structures', category: 'Data', level: 2 },
  { name: 'Algorithms', category: 'Data', level: 2 },
  { name: 'Git', category: 'Tools', level: 2 },
  { name: 'GitHub', category: 'Tools', level: 2 },
  { name: 'Vercel', category: 'Tools', level: 1 },
]

export const skillCategories = [...new Set(skills.map((s) => s.category))]
